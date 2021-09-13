import { Overlay, ModalWindow } from "components/Modal/Modal.styled";

export const Modal = ({picture, onClick}) => {
    return (
        <Overlay onClick={onClick}>
          <ModalWindow>
             <img src={picture} alt="Big" />
          </ModalWindow>
        </Overlay>
    )
}