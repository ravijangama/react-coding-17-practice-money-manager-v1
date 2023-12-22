import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
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
// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionType: 'INCOME',
    balanceAmount: 0,
    incomeAmount: 0,
    expensesAmount: 0,
  }

  changeTitleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  changeOptionType = event => {
    this.setState({optionType: event.target.value})
  }

  submitOnAdd = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionType} = this.state
    const {balanceAmount, incomeAmount, expensesAmount} = this.state
    let totalBalance = balanceAmount
    let totalExpenses = expensesAmount
    let totalIncome = incomeAmount
    if (optionType === 'INCOME') {
      totalIncome += parseInt(amountInput)
      totalBalance = totalIncome - totalExpenses
    } else if (optionType === 'EXPENSES') {
      totalExpenses += parseInt(amountInput)
      totalBalance = totalIncome - totalExpenses
    }
    const newTransaction = {
      id: uuidv4(),
      titleInput,
      amountInput,
      optionType,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionType: 'Income',
      balanceAmount: totalBalance,
      expensesAmount: totalExpenses,
      incomeAmount: totalIncome,
    }))
  }

  deleteTransaction = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        eachTrans => eachTrans.id !== id,
      ),
    }))
  }

  render() {
    const {transactionList, titleInput, amountInput, optionType} = this.state
    const jsxElement = (
      <div className="app-container">
        <div className="app-sub-container">
          <div className="heading-container">
            <h1 className="richard-heading">Hi, Richard</h1>
            <p className="welcome-desc">
              Welcome back to your
              <span className="money-span">Money Manager</span>
            </p>
          </div>
          <MoneyDetails stateObj={this.state} />
          <div className="form-transaction-container">
            <form className="form-container" onSubmit={this.submitOnAdd}>
              <h1>Add Transaction</h1>
              <label htmlFor="titleId">TITLE</label>
              <input
                id="titleId"
                value={titleInput}
                placeholder="TITLE"
                onChange={this.changeTitleInput}
              />
              <label htmlFor="amountId">AMOUNT</label>
              <input
                id="amountId"
                value={amountInput}
                placeholder="AMOUNT"
                onChange={this.changeAmountInput}
              />
              <label htmlFor="typeId">TYPE</label>
              <select
                id="typeId"
                onChange={this.changeOptionType}
                value={optionType}
              >
                {transactionTypeOptions.map(eachType => (
                  <option key={eachType.optionId} value={eachType.optionId}>
                    {eachType.displayText}
                  </option>
                ))}
              </select>
              <button type="submit">Add</button>
            </form>
            <div className="history-list-container">
              <h1>History</h1>

              <div className="transaction-container">
                <p className="title-p">Title</p>
                <p className="title-p">Amount</p>
                <p className="title-p">Type</p>
              </div>
              <ul className="history-ul-container">
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
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
