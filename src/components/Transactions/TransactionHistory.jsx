import "./TransactionHistory.css";
import PropTypes from "prop-types";

export const TransactionHistory = ({transactionsItems = {}}) => {
    const { transactionsArr = [] } = transactionsItems;

return (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className="transArray">
    {transactionsArr.map ((transaction) => (
    <tr key={transaction.id}>
      <td className="oneTransactionItem">{transaction.type}</td>
      <td className="amountTransactionItem">{transaction.amount}</td>
      <td className="oneTransactionItem">{transaction.currency}</td>
    </tr>
    ))}
  </tbody>
</table>
)}

TransactionHistory.propTypes={
    transactionsItems: PropTypes.shape({
        transactionsArr: PropTypes.arrayOf(
        PropTypes.shape({
       id: PropTypes.string,
       type: PropTypes.string,
       currency: PropTypes.string,
       amount: PropTypes.number,
}))}).isRequired
}