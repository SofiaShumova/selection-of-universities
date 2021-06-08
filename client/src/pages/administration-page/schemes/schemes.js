import { universitySchema } from './entities/universityShema';
import { categorySchema } from './entities/categorySchema';
import { trainingProgramSchema } from './entities/trainingProgramSchema';
import { userSchema } from './entities/userSchema';
import { expertReviewSchema } from './entities/expertReviewSchema';
import { requirementsSchema } from './entities/requirementsSchema';
import Table from './Table';

const schemes = [
  new Table('University', universitySchema),
  new Table('Profession'),
  new Table('Type'),
  new Table('City'),
  new Table('Criterion'),
  new Table('Category', categorySchema),
  new Table('Basis-of-learning'),
  new Table('Discipline'),
  new Table('Form-of-education'),
  new Table('Level-of-preparation'),
  new Table('Training-program', trainingProgramSchema),
  new Table('Role'),
  new Table('User', userSchema),
  new Table('Expert-review', expertReviewSchema),
  new Table('Admission-requirements', requirementsSchema),
];

export { schemes };
