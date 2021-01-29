import Modal from 'react-modal';
// import '../../../styles/modal.module.css';

export const ModalDeleteItem = ({
  modalState,
  setModalState,
  item,
  handler,
}) => {
  const hideModal = () => {
    setModalState(false);
  };

  const handlerForm = (e) => {
    e.preventDefault();
    handler(item._id);
  };
  return (
    <Modal
      className="modal"
      isOpen={modalState}
      ariaHideApp={false}
      onRequestClose={hideModal}
    >
      <h1 className="modal__title"> Удаление записи </h1>
      <form onSubmit={handlerForm}>
        <div className="modal__box">
          <p> Уверены, что хотите удалить {item.name} ? </p>
        </div>
        <div className="modal__boxButtons">
          <button type="submit" className="modal__button">
            Удалить
          </button>
          <button className="modal__button" onClick={hideModal}>
            Отменить
          </button>
        </div>
      </form>
    </Modal>
  );
};
