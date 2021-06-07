import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

type ITransactions = {
  id: number;
  amount: number;
  type: string;
  category: string;
  title: string;
  createdAt: Date;
};

type TransactionInput = Omit<ITransactions, "id" | "createdAt">;

type TransactionsProviderProps = {
  children: ReactNode;
};

interface TransactionContextData {
  transactions: ITransactions[];
  createTransaction: (transaction: TransactionInput) => void;
}
export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post("/transactions", transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
