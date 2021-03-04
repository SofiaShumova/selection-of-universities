const getPairsOfCriterions = (selectedCategories) => {
  const categories = selectedCategories.filter(
    (category) => category.criterions.length > 1
  );

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

export default function getPairs(categories) {
  const filtredCategories = filterChecked(categories);

  return {
    pairsOfCategories:
      filtredCategories.length > 1
        ? getPairsOfCategories(filtredCategories)
        : [],
    pairsOfCriterions: getPairsOfCriterions(filtredCategories),
  };
}

// TODO: create filter for selected criterions
