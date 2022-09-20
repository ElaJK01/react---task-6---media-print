import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalRoot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 80%;
  width: 80%;
  transform: translate(-50%, -50%);
  border: 2px solid white;
  box-shadow: 0 4px 8px 2px white;
  overflow: scroll;
  background-color: white;
  display: flex;
  flex-direction: column;
`;
const ModalContent = styled.div`
  background-color: whitesmoke;
`;

const CloseButton = styled.button`
  background-color: #e0e0e0;
  color: darkslategray;
  border-color: lightgray;
  align-self: flex-end;
  border-radius: 5px;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: black;
  }
`;

const Modal = ({ isOpen, children, handleClose }) => {
  if (!isOpen) return null;
  return createPortal(
    <ModalRoot isOpen={isOpen}>
      <CloseButton onClick={handleClose}>x</CloseButton>
      <ModalContent>{children}</ModalContent>
    </ModalRoot>,
    document.body
  );
};

export default Modal;
