import React, { useState, useEffect } from 'react';
import TestService from '../../../service/testService';
import StepsButtons from '../../steps-buttons';
import StartPage from './StartPage';
import ParametrSelection from './ParametrSelection';
import CategoryRating from './CategoryRating';
import CriterionRating from './CriterionRating';

const SelectionPage = () => {
  const { getCategories } = new TestService();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [assessmentCategories, setAssessmentCategories] = useState([]);
  const [categories, setCategories] = useState(getCategories());

  useEffect(() => {
    setAssessmentCategories(getAssessmentCategory(selectedCategories));
    console.log(selectedCategories, assessmentCategories);
  }, [selectedCategories]);

  const nextPage = () => {
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
  };

  const getAssessmentCategory = (selectedCategory) => {
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

  const result = <h2>Результат</h2>;

  const pages = [
    <StartPage nextPage={nextPage} />,
    <ParametrSelection
      categories={categories}
      onChangeCategory={toggleCategory}
      onChangeCriterion={toggleCriterion}
    />,
    <CategoryRating pairs={assessmentCategories} />,
    <CriterionRating categories={selectedCategories} />,
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
