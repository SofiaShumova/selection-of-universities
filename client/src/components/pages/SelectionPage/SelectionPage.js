import React, { useState, useEffect, useContext } from 'react';

import getPairs from '../../../service/analysis/getPairs';
import { useRequest } from '../../hooks';
import { ServiceContext } from '../../context';

import BasicWizard from '../../basic-wizard';
import UniversityFiltres from '../../university-filtres';
import {
  ParametrSelection,
  CategoryRating,
  CriterionRating,
  ResultPage,
} from './slides';

import ErrorIndicator from '../../error-indicator';
import Spinner from '../../spinner';

const SelectionPage = () => {
  const { getCategories } = useContext(ServiceContext);

  const [pairsOfCategories, setPairsOfCategories] = useState([]);
  const [pairsOfCriterions, setPairsOfCriterions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const { data: categories, isLoading, isError, updateRequest } = useRequest(
    [],
    getCategories
  );
  useEffect(() => {
    setSelectedCategories(
      categories.map((category) => Object.assign(category, { checked: false }))
    );
  }, [categories]); //потом может быть проблема при обновлении

  const setPairs = () => {
    const { pairsOfCategories, pairsOfCriterions } = getPairs(
      selectedCategories
    );
    setPairsOfCategories(pairsOfCategories);
    setPairsOfCriterions(pairsOfCriterions);
  };

  const toggleCategory = (categoryId) => {
    const index = selectedCategories.findIndex(
      (item) => item._id === categoryId
    );

    if (~index) {
      setSelectedCategories((array) => {
        array[index].criterions = array[index].criterions.map((criterion) =>
          Object.assign(criterion, {
            checked: !array[index].checked,
          })
        );

        array[index].checked = !array[index].checked;
        return [...array];
      });
    }

    setPairs();
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

    setPairs();
  };

  const rate = (pair, value) => {
    pair.rate = value;
  };

  return (
    <div>
      <BasicWizard>
        <UniversityFiltres title="Фильтры для подбора" />
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
