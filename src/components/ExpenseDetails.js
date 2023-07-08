 import './ExpenseItem.css';
function ExpenseDetails(props){

return (
    <div className='expense-item__description'>
        <div className='expense-item__title'>
            <h2>{props.title}</h2></div>
        <div className='expense-item__location'>{props.location}</div>
        <div className='expense-item__price'>Rs {props.amount}</div>
    </div>
)
}

export default ExpenseDetails;