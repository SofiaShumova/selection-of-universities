import Modal from 'react-modal';
// import '../../../styles/modal.css';
import { Box } from '../../../components/form/Box';
import { BoxButtons } from '../../../components/form/BoxButtons';

export const ModalEditItem = ({
  modalState,
  setModalState,
  item,
  handler,
  fields,
  buttons,
}) => {
  const hideModal = () => {
    setModalState(false);
  };

  const handlerForm = async (e) => {
    e.preventDefault();
    const data = fields.map((field) => [
      field.name,
      e.target[field.name].value,
    ]);
    const obj = Object.fromEntries(data);
    obj._id = item._id;

    return await handler(obj);
  };

  return (
    <Modal
      className="modal"
      isOpen={modalState}
      ariaHideApp={false}
      onRequestClose={hideModal}
    >
      <h1 className="modal__title"> Редактирование записи </h1>
      <form onSubmit={handlerForm}>
        {fields.map((f, index) => {
          f.defaultValue = item[fields[index].name] || '';
          return <Box key={index} options={f} />;
        })}
        <BoxButtons
          buttons={buttons.map((btn) => {
            if (btn.type === 'reset') btn.onClick = hideModal;
            return btn;
          })}
        />
      </form>
    </Modal>
  );
};
