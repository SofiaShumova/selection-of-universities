import { service } from '../service';
import { createSchema } from '../Table';
import { components } from '../../components';

const { getAllCriterion } = service;
const categorySchema = createSchema('category');
categorySchema.criterions = {
  display: 'span',
  input: components.multipeSelect,
  data: { promise: getAllCriterion },
};

export { categorySchema };
