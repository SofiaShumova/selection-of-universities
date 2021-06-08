import { getFilteredData } from './get-filtered-data';

const getTemplateMatrix = (count) => {
  const array = [];

  for (let i = 0; i < count; i++) {
    array.push([]);
    for (let j = 0; j < count; j++) {
      array[i].push(i === j ? 1 : null);
    }
  }

  return array;
};

const getIndexes = (items, pair) => {
  let first = null,
    second = null;

  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (element._id === pair.first._id) first = i;
    else if (element._id === pair.second._id) second = i;
  }
  return { first, second };
};

const getIndexesForString = (items, pair) => {
  let first = null,
    second = null;

  for (let i = 0; i < items.length; i++) {
    const element = items[i];
    if (element === pair.first) first = i;
    else if (element === pair.second) second = i;
  }
  return { first, second };
};

const applyRateToArray = (indexes, rate, array) => {
  const { first, second } = indexes;
  rate = rate ?? 0;

  const absolute = Math.abs(rate);

  array[first][second] = rate === 0 ? 0 : rate < 0 ? absolute : 1 / absolute;
  array[second][first] = rate === 0 ? 0 : rate < 0 ? 1 / absolute : absolute;

  // TODO: предусмотреть 0
};

const getMatrix = (items, pairs) => {
  const templateMatrix = getTemplateMatrix(items.length);

  pairs.forEach((pair) => {
    const indexes =
      typeof items[0] === 'string'
        ? getIndexesForString(items, pair)
        : getIndexes(items, pair);
    applyRateToArray(indexes, pair.rate, templateMatrix);
  });

  return templateMatrix;
};

const getNormalizeVector = (array) => {
  const reducerSum = (a, b) => a + b;
  const vector = array.map((row) => row.reduce(reducerSum));
  const sum = vector.reduce(reducerSum);

  return vector.map((paritet) => paritet / sum);
};

const getPairsUniversity = (obj) => {
  const arr = Object.keys(obj);
  const pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push({ first: arr[i], second: arr[j] });
    }
  }
  return pairs;
};

const multiplyMatrix = (A, B) => {
  // if (A.length !== B[0].length) return null;
  const result = [];

  for (let i = 0; i < B[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < A.length; j++) {
      sum += (B[j][i] ?? 0) * A[j];
    }
    result.push(sum);
  }

  return result;
};
export default class Analysis {
  constructor(categories, pairsCategory, pairsCriterions, filters, service) {
    this.criterions = categories.reduce(
      (acc, category) =>
        acc.concat(
          category.criterions.map((criterion) => Object.assign({}, criterion))
        ),
      []
    );

    this.filters = filters;
    this.service = service;
    this.universities = [];

    const categoryMatrix = getMatrix(categories, pairsCategory);
    const arrayOfCriterionsMatrix = [];

    pairsCriterions.forEach((category) => {
      arrayOfCriterionsMatrix.push(
        getMatrix(category.criterions, category.pairs)
      );
    });

    this.data = {
      categoryMatrix: getNormalizeVector(categoryMatrix),
      arrayOfCriterionsMatrix: arrayOfCriterionsMatrix.map((array) =>
        getNormalizeVector(array)
      ),
    };
  }

  getAvalibleUniversities = async () => {
    const { getAllUniversity, getAllRequirements } = this.service;
    const universities = await getAllUniversity();
    const requirements = await getAllRequirements();
    return getFilteredData(this.filters, universities, requirements);
  };

  getAssessmentForUniversities = async () => {
    let universities = await this.getAvalibleUniversities();
    const { getAllExpertReview } = this.service;
    universities = universities.reduce(
      (acc, u) => ({ ...acc, [u._id]: true }),
      {}
    );

    let reviews = await getAllExpertReview();
    reviews = reviews.filter((r) =>
      universities.hasOwnProperty(r.university._id)
    );
    this.universities = reviews.map((r) => r.university);
    return reviews;
  };

  getMatrixForUninersity = async () => {
    let reviews = await this.getAssessmentForUniversities();
    reviews = reviews.reduce((acc, r) => {
      const criterions = r.result.reduce(
        (acc, c) => ({ ...acc, [c.criterion]: c.score }),
        {}
      );
      return { ...acc, [r.university._id]: criterions };
    }, {});

    const pairs = getPairsUniversity(reviews);

    const pairsWithRate = this.criterions.map((criterion) =>
      pairs.map((pair) => {
        const { first, second } = pair;
        return {
          first,
          second,
          rate: reviews[second][criterion._id] - reviews[first][criterion._id],
        };
      })
    );
    const items = Object.keys(reviews);
    this.universitiesAssessment = pairsWithRate.map((arr) =>
      getNormalizeVector(getMatrix(items, arr))
    );
    return this.universitiesAssessment;
  };

  getResult = async () => {
    await this.getMatrixForUninersity();
    const array = multiplyMatrix(
      this.data.categoryMatrix,
      this.data.arrayOfCriterionsMatrix
    );
    this.result = multiplyMatrix(array, this.universitiesAssessment);
    return { result: this.result, universities: this.universities };
  };
}
