import Modal from 'react-modal';
import '../../styles/modal.css';

// const fields = {
//   title: ' Название',
//   type: 'text',
//   element: 'input',
//   name: 'name',
//   defaultValue: '',
// };
export const ModalForm = ({
  title,
  fields,
  buttons,
  state,
  setState,
  handler,
}) => {
  return (
    <Modal
      className="modal"
      isOpen={state}
      ariaHideApp={false}
      onRequestClose={() => {
        setState(false);
      }}
    >
      <h1 className="modal__title">{title}</h1>
      <form onSubmit={handler}>
        {fields.map((f, index) => (
          <Box key={index} options={f} />
        ))}
        <BoxButtons buttons={buttons} />
      </form>
    </Modal>
  );
};
