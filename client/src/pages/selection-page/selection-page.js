import React, { useState, useEffect, useContext } from 'react';

import getPairs from '../../services/analysis/get-pairs';
import Analysis from '../../services/analysis/analysis';

import { useRequest, useNotify } from '../../hooks';
import { serviceContext } from '../../contexts/service-context';

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
  const service = useContext(serviceContext);
  const { getAllCategory } = service;

  const [filters, setFilters] = useState({});
  const toggleFilter = (obj) => setFilters((prev) => ({ ...prev, ...obj }));

  const [analysis, setAnalysis] = useState(null);
  const [pairsOfCategories, setPairsOfCategories] = useState([]);
  const [pairsOfCriterions, setPairsOfCriterions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const {
    data: categories,
    isLoading,
    isError,
  } = useRequest([], getAllCategory);

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
        array[index].criterions = array[index].criterions.map((criterion) => ({
          ...criterion,
          checked: !array[index].checked,
        }));

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
          array[indexCategory].criterions[indexCriterion].checked =
            !array[indexCategory].criterions[indexCriterion].checked;
        }

        return [...array];
      });
    }
  };

  const rateCriterion = (_id, pair, value) => {
    const copy = pairsOfCriterions.slice();
    const indexCategory = copy.findIndex((category) => category._id === _id);
    const copyCriterion = copy[indexCategory].pairs.slice();

    const indexCriterion = copyCriterion.findIndex(
      ({ first, second }) =>
        first._id === pair.first._id && second._id === pair.second._id
    );

    if (indexCriterion !== -1) {
      copyCriterion[indexCriterion].rate = Number(value);
    }
    copy[indexCategory].pairs = copyCriterion;
    setPairsOfCriterions(copy);
  };

  const rateCategory = (pair, value) => {
    const copy = pairsOfCategories.slice();
    const index = copy.findIndex(
      ({ first, second }) =>
        first._id === pair.first._id && second._id === pair.second._id
    );

    if (index !== -1) {
      copy[index].rate = Number(value);
    }
    setPairsOfCategories(copy);
  };

  const { addErrorNotify } = useNotify();
  const lastAction = async () => {
    let state = true;
    let filtered = selectedCategories.filter(({ checked }) => checked === true);

    if (filtered.length < 2) {
      state = false;
      addErrorNotify('Для анализа необходимо выбрать две и более категорий 🙂');
    }

    filtered = filtered.map(
      ({ criterions }) => criterions.filter(({ checked }) => checked).length
    );

    if (filtered.some((count) => count < 2)) {
      state = false;
      addErrorNotify(
        'Для анализа необходимо выбрать два и более критериев в каждой категории 🙂'
      );
    }

    if (state) {
      const a = new Analysis(
        selectedCategories.filter(({ checked }) => checked),
        pairsOfCategories,
        pairsOfCriterions,
        filters,
        service
      );
      const result = await a.getResult();
      setAnalysis(result);
    }
    return state;
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <BasicWizard lastAction={lastAction}>
        <UniversityFilters
          title="Фильтры для подбора"
          toggleFilter={toggleFilter}
        />
        <ParametrSelection
          categories={selectedCategories}
          onChangeCategory={toggleCategory}
          onChangeCriterion={toggleCriterion}
        />
        <CategoryRating pairs={pairsOfCategories} onChange={rateCategory} />
        <CriterionRating
          categories={pairsOfCriterions}
          onChange={rateCriterion}
        />
        <ResultPage result={analysis} />
      </BasicWizard>
    </div>
  );
};

export default SelectionPage;
