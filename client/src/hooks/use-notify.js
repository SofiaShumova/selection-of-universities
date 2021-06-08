import { useToasts } from 'react-toast-notifications';

const useNotify = () => {
  const { addToast } = useToasts();
  const notify = (text, appearance, callback) => {
    addToast(text, { appearance, autoDismiss: true }, callback);
  };
  return {
    addErrorNotify: (text = 'error', callback = () => {}) =>
      notify(text, 'error', callback),
    addWarnNotify: (text = 'warning', callback = () => {}) =>
      notify(text, 'warning', callback),
    addSuccessNotify: (text = 'success', callback = () => {}) =>
      notify(text, 'success', callback),
  };
};

export default useNotify;
