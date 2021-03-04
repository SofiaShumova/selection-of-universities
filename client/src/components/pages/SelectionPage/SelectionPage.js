import React, { useState, useEffect } from 'react';
import TestService from '../../../service/TestService';
import StepsButtons from '../../steps-buttons';
import StartPage from './StartPage';
import ParametrSelection from './ParametrSelection';
import CategoryRating from './CategoryRating';
import CriterionRating from './CriterionRating';
import Analysis from '../../../service/analysis';

const SelectionPage = () => {
  const { getCategories } = new TestService();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [pairsOfCategories, setPairsOfCategories] = useState([]);
  const [pairsOfCriterions, setPairsOfCriterions] = useState([]);
  const [resultArray, setResultArray] = useState([]);

  const [categories, setCategories] = useState(getCategories());

  useEffect(() => {
    setPairsOfCategories(getPairsOfCategories(selectedCategories));
    setPairsOfCriterions(getPairsOfCriterions(selectedCategories));
  }, [selectedCategories]);

  const nextPage = () => {
    if (currentIndex === pages.length - 2) {
      const analysis = new Analysis(
        selectedCategories,
        pairsOfCategories,
        pairsOfCriterions
      );
    }
    setCurrentIndex(currentIndex + 1);
  };
  const previousPage = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const toggleCategory = (category) => {
    const foundCategory = selectedCategories.find(
      (c) => c._id === category._id
    );

    if (foundCategory) {
      setSelectedCategories(
        selectedCategories.filter((c) => c._id !== category._id)
      );
      category.checked = false;
    } else {
      const copy = Object.assign({}, category);
      copy.criterions = [];
      setSelectedCategories([...selectedCategories, copy]);
      category.checked = true;
    }
  };

  const toggleCriterion = (category, criterion) => {
    const foundCategory = selectedCategories.find(
      (c) => c._id === category._id
    );

    const foundCriterion = foundCategory.criterions.find(
      (c) => c._id === criterion._id
    );

    if (foundCriterion) {
      foundCategory.criterions = foundCategory.criterions.filter(
        (c) => c._id !== criterion._id
      );
      criterion.checked = false;
    } else {
      foundCategory.criterions.push(Object.assign({}, criterion));
      criterion.checked = true;
    }
    setSelectedCategories([...selectedCategories]);
  };

  const getPairsOfCategories = (selectedCategories) => {
    const pairs = [];
    const categories = selectedCategories.filter(
      (category) => category.criterions.length
    );

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

  const getPairsOfCriterions = (selectedCategories) => {
    const categories = selectedCategories.filter(
      (category) => category.criterions.length
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

  const rate = (pair, value) => {
    pair.rate = value;
  };
  const result = <h2>Результат</h2>;

  const pages = [
    <StartPage nextPage={nextPage} />,
    <ParametrSelection
      categories={categories}
      onChangeCategory={toggleCategory}
      onChangeCriterion={toggleCriterion}
    />,
    <CategoryRating pairs={pairsOfCategories} onChange={rate} />,
    <CriterionRating categories={pairsOfCriterions} onChange={rate} />,
    result,
  ];

  return (
    <div>
      {pages[currentIndex]}
      <StepsButtons
        nextHandler={nextPage}
        previousHandler={previousPage}
        hasPrevious={currentIndex !== 0}
        hasNext={currentIndex !== pages.length - 1}
      />
    </div>
  );
};

export default SelectionPage;
