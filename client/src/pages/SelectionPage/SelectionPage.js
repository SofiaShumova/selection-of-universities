import React, { useState, useEffect, useContext } from 'react';

import getPairs from '../../services/analysis/getPairs';
import { useRequest } from '../../hooks';
import { ServiceContext } from '../../contexts';

import BasicWizard from '../../components/basic-wizard';
import UniversityFilters from '../../components/university-filters';
import {
  ParametrSelection,
  CategoryRating,
  CriterionRating,
  ResultPage,
} from './slides';

import { ErrorIndicator } from '../../components/common';
import Spinner from '../../components/spinner';

const SelectionPage = () => {
  const { getCategories } = useContext(ServiceContext);

  const [pairsOfCategories, setPairsOfCategories] = useState([]);
  const [pairsOfCriterions, setPairsOfCriterions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { data: categories, isLoading, isError, updateRequest } = useRequest(
    [],
    getCategories
  );
  useEffect(() => {
    setSelectedCategories(
      categories.map((category) => Object.assign({ checked: false }, category))
    );
  }, [categories]); //потом может быть проблема при обновлении

  useEffect(() => {
    const { pairsOfCategories, pairsOfCriterions } = getPairs(
      JSON.stringify(selectedCategories)
    );
    setPairsOfCategories(pairsOfCategories);
    setPairsOfCriterions(pairsOfCriterions);
  }, [selectedCategories]);

  const toggleCategory = (categoryId) => {
    const index = selectedCategories.findIndex(
      (item) => item._id === categoryId
    );

    if (index !== -1) {
      setSelectedCategories((array) => {
        array[index].criterions = array[index].criterions.map((criterion) =>
          Object.assign(
            {
              checked: !array[index].checked,
            },
            criterion
          )
        );

        array[index].checked = !array[index].checked;
        return [...array];
      });
    }
  };

  const toggleCriterion = (categoryId, criterionId) => {
    const indexCategory = selectedCategories.findIndex(
      (item) => item._id === categoryId
    );

    if (~indexCategory) {
      setSelectedCategories((array) => {
        const indexCriterion = array[indexCategory].criterions.findIndex(
          (item) => item._id === criterionId
        );

        if (~indexCategory) {
          array[indexCategory].criterions[indexCriterion].checked = !array[
            indexCategory
          ].criterions[indexCriterion].checked;
        }

        return [...array];
      });
    }
  };

  const rate = (pair, value) => {
    pair.rate = value;
  };

  return (
    <div>
      <BasicWizard>
        <UniversityFilters title="Фильтры для подбора" />
        {isLoading ? (
          <Spinner />
        ) : isError ? (
          <ErrorIndicator />
        ) : (
          <ParametrSelection
            categories={selectedCategories}
            onChangeCategory={toggleCategory}
            onChangeCriterion={toggleCriterion}
          />
        )}
        <CategoryRating pairs={pairsOfCategories} onChange={rate} />
        <CriterionRating categories={pairsOfCriterions} onChange={rate} />
        <ResultPage />
      </BasicWizard>
    </div>
  );
};

export default SelectionPage;
