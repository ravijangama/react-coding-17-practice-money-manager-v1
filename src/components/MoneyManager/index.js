import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const BALANCE_URL =
  'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png '

const INCOME_URL =
  'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png'

const EXPENSE_URL =
  'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png '

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
  }

  render() {
    const {transactionList, titleInput, amountInput} = this.state
    console.log(transactionTypeOptions)
    const jsxElement = (
      <div className="app-container">
        <div className="app-sub-container">
          <div className="heading-container">
            <h1 className="richard-heading">Hi, Richard</h1>
            <p className="welcome-desc">
              Welcome to your <span className="money-span">Money Manager</span>
            </p>
          </div>
          <ul className="money-detail-ul">
            <MoneyDetails
              imgUrl={BALANCE_URL}
              amountType="Balance"
              altText="balance"
              bgName="bg-balance"
            />
            <MoneyDetails
              imgUrl={INCOME_URL}
              amountType="Income"
              altText="income"
              bgName="bg-income"
            />
            <MoneyDetails
              imgUrl={EXPENSE_URL}
              amountType="Expenses"
              altText="expenses"
              bgName="bg-expense"
            />
          </ul>
          <div className="form-transaction-container">
            <form className="form-container">
              <h1>Add Transaction</h1>
              <label htmlFor="titleId">TITLE</label>
              <input id="titleId" value={titleInput} placeholder="TITLE" />
              <label htmlFor="amountId">AMOUNT</label>
              <input id="amountId" value={amountInput} placeholder="AMOUNT" />
              <label htmlFor="typeId">TYPE</label>
              <select id="typeId">
                <option>Income</option>
                <option>Expense</option>
              </select>
              <button type="button">Add</button>
            </form>
            <div className="history-list-container">
              <h1>History</h1>
              <div className="transaction-container">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>
              <ul>
                <TransactionItem />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
    return jsxElement
  }
}
export default MoneyManager
