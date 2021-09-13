import { Overlay, ModalWindow } from "components/Modal/Modal.styled";
import PropTypes from "prop-types";

export const Modal = ({ picture, onClick }) => {
  return (
    <Overlay onClick={onClick}>
      <ModalWindow>
        <img src={picture} alt="Big" />
      </ModalWindow>
    </Overlay>
  );
};
Modal.propTypes = {
  picture: PropTypes.string.isRequired,
};
