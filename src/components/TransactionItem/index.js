// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, titleInput, amountInput, optionType} = transactionDetails
  const clickOnDelImg = () => {
    deleteTransaction(id)
  }
  return (
    <li className="transaction-container">
      <p className="title-p">{titleInput}</p>
      <p className="title-p">Rs {amountInput}</p>
      <p className="title-p">{optionType}</p>
      <button
        type="button"
        className="title-p"
        data-testid="delete"
        onClick={clickOnDelImg}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
