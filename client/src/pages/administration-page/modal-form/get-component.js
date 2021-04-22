import {
  Checkbox,
  Input,
  InputFile,
  MultipeSelect,
  SingleSelect,
  TextArea,
} from '../../../components/common';
import { components } from '../components';

export function getComponent(name) {
  const {
    multipeSelect,
    singleSelect,
    input,
    file,
    textarea,
    checkbox,
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
    default:
      return null;
  }
}
