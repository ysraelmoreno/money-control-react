import { formatCurrencyMoney, formatDate } from "../../helpers/ValueFormatter";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  console.log(transactions);

  return (
    <Container>
      {transactions.length !== 0 ? (
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
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {" "}
                  {transaction.type === "deposit" ? "+ " : "- "}
                  {formatCurrencyMoney({
                    locale: "pt-BR",
                    style: "currency",
                    currency: "BRL",
                    value: transaction.amount,
                  })}
                </td>
                <td>{transaction.category}</td>
                <td>{formatDate("pt-BR", transaction.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        "Não há transações disponíveis"
      )}
    </Container>
  );
}
