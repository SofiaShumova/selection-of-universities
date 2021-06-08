import {
  Checkbox,
  Input,
  InputFile,
  MultipeSelect,
  SingleSelect,
  TextArea,
} from '../../../components/common';
import ListInputs from '../../../components/list-of-checked-inputs';
import { components } from '../components';

export function getComponent(name) {
  const {
    multipeSelect,
    singleSelect,
    input,
    file,
    textarea,
    checkbox,
    listInputs,
  } = components;
  switch (name) {
    case singleSelect:
      return SingleSelect;
    case multipeSelect:
      return MultipeSelect;
    case input:
      return Input;
    case file:
      return InputFile;
    case textarea:
      return TextArea;
    case checkbox:
      return Checkbox;
    case listInputs:
      return ListInputs;
    default:
      return null;
  }
}
