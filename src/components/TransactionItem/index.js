// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, onDeleteItem} = props
  const {id, title, amount, type} = details

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="lisItem">
      <p className="title">{title}</p>
      <p className="amount">Rs {amount}</p>
      <p className="type">{type}</p>
      <button
        className="delet"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delimg"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
