import ListInputs from '../../../../components/list-of-checked-inputs';
import { useRequest } from '../../../../hooks';
import { components } from '../../components';
import { service } from '../service';
import { addMethodsToSchema } from '../Table';

const {
  getAllUniversity,
  getAllTrainingProgram,
  getAllLevelOfPreparation,
  getAllBasisOfLearning,
  getAllFormOfEducation,
  getAllDiscipline,
  createMethods,
} = service;

const CustomComponent = ({ targetData, prop, initialValue }) => {
  const { data } = useRequest([], getAllDiscipline);

  return (
    <ListInputs
      label={prop}
      defaultValue={data?.map((item) => {
        const result = {
          prop: item,
          value: 0,
        };
        if (initialValue) {
          const obj = initialValue.find(
            (elem) => elem.discipline._id === item._id
          );
          if (obj) {
            result.value = obj.score;
            result._id = obj._id;
          }
        }
        return result;
      })}
      onChange={({ disciplines }) => {
        const res = Object.entries(disciplines)
          .filter(([key, value]) => value.value > 0)
          .map(([key, value]) => ({
            discipline: value.discipline,
            score: value.value,
          }));

        if (res.length) targetData[prop] = res;
      }}
    ></ListInputs>
  );
};

const requirementsSchema = {
  _id: { display: 'span' },

  university: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllUniversity },
  },
  trainingProgram: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllTrainingProgram },
  },
  levelOfPreparation: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllLevelOfPreparation },
  },
  basisOfLearning: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllBasisOfLearning },
  },
  formOfEducation: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllFormOfEducation },
  },
  numberOfStudents: {
    display: 'span',
    input: components.input,
  },
  trainingDuration: {
    display: 'span',
    input: components.input,
  },
  disciplines: {
    display: 'span',
    formatDisplay: (value) => {
      return value.reduce((acc, i) => acc + i?.discipline?.name, '');
    },
    CustomComponent,
  },
};

const { getAll, add, update, remove } = createMethods('admission-requirements');
addMethodsToSchema(requirementsSchema, getAll, add, update, remove);

export { requirementsSchema };
