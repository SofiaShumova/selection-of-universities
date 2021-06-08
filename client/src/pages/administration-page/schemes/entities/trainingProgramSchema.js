import { service } from '../service';
import { createSchema } from '../Table';
import { components } from '../../components';

const { getAllProfession } = service;
const trainingProgramSchema = createSchema('training-program');
trainingProgramSchema.professions = {
  display: 'span',
  input: components.multipeSelect,
  data: { promise: getAllProfession },
};

export { trainingProgramSchema };
