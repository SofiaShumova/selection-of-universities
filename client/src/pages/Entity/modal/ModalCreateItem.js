import Modal from 'react-modal';
import styles from '../../../styles/modal.module.css';
import { Box } from '../../../components/form/Box';
import { BoxButtons } from '../../../components/form/BoxButtons';

export const ModalCreateItem = ({
  modalState,
  setModalState,
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

    return await handler(obj);
  };

  return (
    <Modal
      className={styles.modal}
      isOpen={modalState}
      ariaHideApp={false}
      onRequestClose={hideModal}
    >
      <h1 className="modal__title"> Создание записи </h1>
      <form onSubmit={handlerForm}>
        {fields.map((f, index) => (
          <Box key={index} options={f} />
        ))}
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
