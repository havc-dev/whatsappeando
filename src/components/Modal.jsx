import ReactDOM from 'react-dom';

const Modal = ({ link }) => {
  return ReactDOM.createPortal(
    <div>
      <p>{link}</p>
    </div>,document.getElementById('modal-root')
  );
};

export default Modal;
