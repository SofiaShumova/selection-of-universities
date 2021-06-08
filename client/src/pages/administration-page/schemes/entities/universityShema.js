import { components } from '../../components';
import { createSchema } from '../Table';
import { service } from '../service';
const { getAllType, getAllCity } = service;

const universitySchema = Object.assign(createSchema('university'), {
  city: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllCity },
  },
  phone: { display: 'span', input: components.input },
  yearOfFoundation: { display: 'span', input: components.input },
  type: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllType },
  },
  militaryDepartment: { display: 'span', input: components.checkbox },
  dormitory: { display: 'span', input: components.checkbox },
  site: { display: 'span', input: components.input },
});

export { universitySchema };
