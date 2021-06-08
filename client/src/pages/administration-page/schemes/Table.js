import { service } from './service';
import { components } from '../components';

const commonEntity = {
  _id: { display: 'span' },
  name: { display: 'span', input: components.input },
  description: { display: 'span', input: components.textarea },
};

export function createSchema(tableName) {
  const { getAll, add, update, remove } = service.createMethods(tableName);

  const schema = Object.assign({}, commonEntity);
  addMethodsToSchema(schema, getAll, add, update, remove);

  return schema;
}

export default function Table(name, schema = createSchema(name.toLowerCase())) {
  this.name = name;
  this.schema = schema;
}

export function addMethodsToSchema(scheme, get, add, update, remove) {
  Object.defineProperties(scheme, {
    _getData: { value: get },
    _addItem: { value: add },
    _updateItem: { value: update },
    _removeItem: { value: remove },
  });
}
