import React, { useState } from 'react';
import TestService from '../../../service/TestService';
import getPairs from '../../../service/analysis/getPairs';
import { useRequest } from '../../hooks';

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
  const { getCategories } = new TestService();

  const [pairsOfCategories, setPairsOfCategories] = useState([]);
  const [pairsOfCriterions, setPairsOfCriterions] = useState([]);

  const { data: categories, isLoading, isError, updateRequest } = useRequest(
    [],
    getCategories
  );

  const setPairs = () => {
    const { pairsOfCategories, pairsOfCriterions } = getPairs(categories);
    setPairsOfCategories(pairsOfCategories);
    setPairsOfCriterions(pairsOfCriterions);
  };

  const toggleCategory = (category) => {
    if (!category.checked) {
      category.checked = !category.checked;
      // setCategories((prevState) => {
      //   const item = prevState.find((item) => item._id === category);
      //   return [...prevState, item];
      // });
      //category.criterions.forEach((criterion) => (criterion.checked = true));
      // TODO: not working select criterion
    } else {
      category.checked = !category.checked;
    }
    setPairs();
  };

  const toggleCriterion = (category, criterion) => {
    criterion.checked = !criterion.checked;
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
            categories={categories}
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
