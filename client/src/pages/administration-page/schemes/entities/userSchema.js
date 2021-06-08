import { service } from '../service';
import { addMethodsToSchema } from '../Table';
import { components } from '../../components';
const { getAllCity } = service;
const { getAll, add, update, remove } = service.createMethods('user');

const userSchema = {
  _id: { display: 'span' },
  name: { display: 'span', input: components.input },
  email: { display: 'span', input: components.input },
  password: { display: 'span', input: components.input },
  city: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllCity },
  },
  role: { display: 'span', input: components.input },
};

addMethodsToSchema(userSchema, getAll, add, update, remove);

export { userSchema };
