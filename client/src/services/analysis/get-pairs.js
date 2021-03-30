const getPairsOfCriterions = (selectedCategories) => {
  const categories = selectedCategories.map((category) => {
    category.criterions = category.criterions.filter(
      (criterion) => criterion.checked
    );
    return category;
  });

  // console.log(categories);
  return categories.map((category) => {
    const pairs = [];
    const length = category.criterions.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        pairs.push({
          first: category.criterions[i],
          second: category.criterions[j],
        });
      }
    }
    category.pairs = pairs;
    return category;
  });
};

const getPairsOfCategories = (categories) => {
  const pairs = [];

  for (let i = 0; i < categories.length - 1; i++) {
    for (let j = i + 1; j < categories.length; j++) {
      pairs.push({
        first: categories[i],
        second: categories[j],
      });
    }
  }
  return pairs;
};

const filterChecked = (array) => array.filter((item) => item.checked);

export { getPairsOfCategories, getPairsOfCriterions, filterChecked };

export default function getPairs(categoriesJSON) {
  const copy = JSON.parse(categoriesJSON);

  const filteredCategories = filterChecked(copy);

  return {
    pairsOfCategories:
      filteredCategories.length > 1
        ? getPairsOfCategories(filteredCategories)
        : [],
    pairsOfCriterions: getPairsOfCriterions(filteredCategories),
  };
}

// TODO: create filter for selected criterions
