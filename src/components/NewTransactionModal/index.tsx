import Modal from "react-modal";
import { Container, TransactionTypeContainer, TypeButton } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      closeTimeoutMS={1000}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="Close Modal" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <form>
          <input type="text" placeholder="Titulo" />
          <input type="number" placeholder="Valor" />
          <TransactionTypeContainer>
            <TypeButton
              isActive={type === "deposit"}
              activeColor="green"
              type="button"
              onClick={() => {
                setType("deposit");
              }}
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </TypeButton>
            <TypeButton
              isActive={type === "withdraw"}
              activeColor="red"
              type="button"
              onClick={() => {
                setType("withdraw");
              }}
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Saída</span>
            </TypeButton>
          </TransactionTypeContainer>
          <input type="text" placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </form>
      </Container>
    </Modal>
  );
}
