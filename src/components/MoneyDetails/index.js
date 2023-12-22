// Write your code here
import './index.css'

const BALANCE_URL =
  'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png '

const INCOME_URL =
  'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png'

const EXPENSE_URL =
  'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png '

const MoneyDetails = props => {
  const {stateObj} = props
  const {balanceAmount, incomeAmount, expensesAmount} = stateObj
  return (
    <ul className="money-detail-ul">
      <li className="money-details-container bg-balance ">
        <img src={BALANCE_URL} alt="balance" className="type-img" />
        <div className="type-container">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </li>
      <li className="money-details-container bg-income">
        <img src={INCOME_URL} alt="income" className="type-img" />
        <div className="type-container">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </li>
      <li className="money-details-container bg-expense">
        <img src={EXPENSE_URL} alt="expenses" className="type-img" />
        <div className="type-container">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expensesAmount}</p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
