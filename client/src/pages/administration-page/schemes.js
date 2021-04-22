import { components } from './components';
import Service from '../../services/api/service';
const {
  getAllUniversity,
  getAllCity,
  getAllType,
  addUniversity,
  updateUniversity,
  removeUniversity,
} = new Service();

const universitySchema = {
  _id: { display: 'span' },
  name: { display: 'span', input: components.input },
  description: { display: 'span', input: components.textarea },
  city: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllCity, displayKey: 'name', selectedKey: '_id' },
  },
  phone: { display: 'span', input: components.input },
  yearOfFoundation: { display: 'span', input: components.input },
  type: {
    key: 'name',
    display: 'span',
    input: components.singleSelect,
    data: { promise: getAllType, displayKey: 'name', selectedKey: '_id' },
  },
  militaryDepartment: { display: 'span', input: components.checkbox },
  dormitory: { display: 'span', input: components.checkbox },
  site: { display: 'span', input: components.input },
};

addMethodsToSchema(
  universitySchema,
  getAllUniversity,
  addUniversity,
  updateUniversity,
  removeUniversity
);

function addMethodsToSchema(scheme, get, add, update, remove) {
  Object.defineProperties(scheme, {
    _getData: { value: get },
    _addItem: { value: add },
    _updateItem: { value: update },
    _removeItem: { value: remove },
  });
}
Object.defineProperties(universitySchema, {});

export { universitySchema };
