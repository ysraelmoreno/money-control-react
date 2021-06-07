import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from "react";
import { api } from "../services/api";

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
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}
const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });

    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
