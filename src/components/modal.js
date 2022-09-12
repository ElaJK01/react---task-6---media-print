import React from 'react';
import {createPortal} from "react-dom";
import styled from 'styled-components';
import PrintButton from "./printButton";

const ModalRoot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 80%;
  width: 80%;
  transform: translate(-50%, -50%);
  border: 1px solid blue;
  overflow: hidden;
`
const ModalContent = styled.div`
  background-color: whitesmoke;
`

const Modal = ({isOpen, children, handleClose}) => {

    if (!isOpen) return null;
    return createPortal(<ModalRoot isOpen={isOpen}>
        <PrintButton onClick={handleClose} text="Close" />
        <ModalContent>{children}</ModalContent></ModalRoot>, document.body)
}

export default Modal;