// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, expenses, income} = props
  return (
    <div className="balance-con">
      <div className="totalBalance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance"
        />
        <div className="text">
          <p className="balancetext">Your Balance</p>
          <p className="rupees" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="totalIncome">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance"
        />
        <div className="text">
          <p className="balancetext">Your Income</p>
          <p className="rupees" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="totalExpenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance"
        />
        <div className="text">
          <p className="balancetext">Your Expenses</p>
          <p className="rupees" data-testid="expensesAmount">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
