import { service } from '../service';
import { addMethodsToSchema } from '../Table';
import { components } from '../../components';
const { getAllUser, getAllUniversity } = service;
const { getAll, add, update, remove } = service.createMethods('expert-review');

const expertReviewSchema = {
  _id: { display: 'span' },
  expert: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllUser },
  },
  description: { display: 'span', input: components.textarea },
  university: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllUniversity },
  },
};

addMethodsToSchema(expertReviewSchema, getAll, add, update, remove);

export { expertReviewSchema };
