import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

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
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: 0,
    type: 'Income',
    transactionList: [],
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type,
    }
    if (newTransaction.type === 'Income') {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        amount: 0,
        title: '',
        type: '',
        balance: prevState.balance + newTransaction.amount,
        income: prevState.income + newTransaction.amount,
      }))
    } else {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        amount: 0,
        title: '',
        type: '',
        balance: prevState.balance - newTransaction.amount,
        expenses: prevState.expenses + newTransaction.amount,
      }))
    }
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onTypeChange = event => {
    this.setState({type: event.target.value})
  }

  onDeleteItem = id => {
    const {transactionList} = this.state
    const filtered = transactionList.filter(each => each.id === id)
    if (filtered[0].type === 'Income') {
      this.setState(prevState => ({
        transactionList: prevState.transactionList.filter(
          each => each.id !== id,
        ),
        balance: prevState.balance - filtered[0].amount,
        income: prevState.income - filtered[0].amount,
      }))
    } else {
      this.setState(prevState => ({
        transactionList: prevState.transactionList.filter(
          each => each.id !== id,
        ),
        balance: prevState.balance + filtered[0].amount,
        expenses: prevState.expenses - filtered[0].amount,
      }))
    }
  }

  render() {
    const {
      balance,
      income,
      expenses,
      title,
      amount,
      transactionList,
    } = this.state
    return (
      <div className="bg-con">
        <div className="name-card">
          <h1 className="head">Hi, Richard</h1>
          <p className="desc">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>

        <MoneyDetails balance={balance} expenses={expenses} income={income} />

        <div className="bottomPart">
          <form className="form" onSubmit={this.onAddTransaction}>
            <div className="para-bg">
              <h1 className="trans">Add Transaction</h1>
            </div>
            <label className="label">
              TITLE
              <input
                className="input"
                value={title}
                onChange={this.onTitleChange}
                placeholder="TITLE"
              />
            </label>
            <label className="label">
              AMOUNT
              <input
                className="input"
                value={amount}
                onChange={this.onAmountChange}
                placeholder="AMOUNT"
              />
            </label>
            <label className="label">
              TYPE
              <select onChange={this.onTypeChange}>
                {transactionTypeOptions.map(each => (
                  <option value={each.displayText} id={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            </label>
            <div>
              <button type="submit" className="submitButt">
                Add
              </button>
            </div>
          </form>

          <div className="historyTab">
            <h1 className="history">History</h1>
            <div className="menubar">
              <p className="menu">Title</p>
              <p className="menu">Amount</p>
              <p className="menu">Type</p>
            </div>
            <ul className="liscon">
              {transactionList.map(each => (
                <TransactionItem
                  key={each.id}
                  details={each}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
