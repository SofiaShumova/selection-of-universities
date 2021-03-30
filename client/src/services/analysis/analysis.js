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
  const first = items.indexOf(pair.first);
  const second = items.indexOf(pair.second);

  return { first, second };
};

const applyRateToArray = (indexes, rate, array) => {
  const { first, second } = indexes;
  const absolute = Math.abs(rate);

  array[first][second] = rate < 0 ? absolute : 1 / absolute;
  array[second][first] = rate < 0 ? 1 / absolute : absolute;
  // TODO: предусмотреть 0
};

const getMatrix = (items, pairs) => {
  const templateMatrix = getTemplateMatrix(items.length);

  pairs.forEach((pair) => {
    const indexes = getIndexes(items, pair);
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

export default class Analysis {
  constructor(categories, pairsCategory, pairsCriterions) {
    const categoryMatrix = getMatrix(categories, pairsCategory);
    const arrayOfCriterionsMatrix = [];

    pairsCriterions.forEach((category) => {
      arrayOfCriterionsMatrix.push(
        getMatrix(category.criterions, category.pairs)
      );
    });

    console.log({
      categoryMatrix: getNormalizeVector(categoryMatrix),
      arrayOfCriterionsMatrix: arrayOfCriterionsMatrix.map((array) =>
        getNormalizeVector(array)
      ),
    });
  }
}
