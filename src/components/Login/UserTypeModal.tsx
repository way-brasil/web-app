import React from "react";
import LoginModal from "./LoginModal";
import { ModalContent, UserTypeButton } from "../../pages/global/Login/styles";

interface UserTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleUserTypeClick: () => void;
}

const UserTypeModal: React.FC<UserTypeModalProps> = ({
  isOpen,
  onClose,
  handleUserTypeClick,
}) => (
  <LoginModal isOpen={isOpen} onClose={onClose}>
    <ModalContent>
      <h1>
        Deseja entrar em qual <br />
        conta?
      </h1>
      <UserTypeButton className="user" onClick={handleUserTypeClick}>
        <img className="logo" src="/ico/user.svg" alt="" />
        <div className="content">
          <h3 className="title">Passageiro</h3>
          <p className="address">VILA ROAMNA 1 · CAMAÇARI/BA</p>
          <p className="data">19 de mai</p>
        </div>
        <img src="/ico/ligth-arrow-1.svg" alt="" />
      </UserTypeButton>
      <UserTypeButton className="driver" onClick={handleUserTypeClick}>
        <img src="/ico/driver.svg" className="logo" alt="" />
        <div className="content">
          <h3 className="title">Passageiro</h3>
          <p className="address">VILA ROAMNA 1 · CAMAÇARI/BA</p>
          <p className="data">19 de mai</p>
        </div>
        <img src="/ico/ligth-arrow-1.svg" alt="" />
      </UserTypeButton>
    </ModalContent>
  </LoginModal>
);

export default UserTypeModal;
