import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

type ITransactions = {
  id: number;
  amount: number;
  type: string;
  category: string;
  title: string;
  createdAt: Date;
};

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<ITransactions[]>([]);

  useEffect(() => {
    api.get("transactions").then((response) => setTransactions(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => {
            const newDate = new Date(transaction.createdAt);

            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>+ {transaction.amount}</td>
                <td>{transaction.category}</td>
                <td>{newDate.toLocaleDateString("pt-br")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}
