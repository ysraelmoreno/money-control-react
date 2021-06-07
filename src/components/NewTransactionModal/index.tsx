import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { Container, TransactionTypeContainer, TypeButton } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      category,
      type,
      amount,
    });

    setTitle("");
    setCategory("");
    setType("deposit");
    setAmount(0);

    onRequestClose();
  }

  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          value={title}
          placeholder="Titulo"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          value={amount}
          placeholder="Valor"
          onChange={(event) => setAmount(Number(event.target.value))}
        />
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
        <input
          value={category}
          type="text"
          placeholder="Categoria"
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
