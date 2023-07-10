import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';

const ExpenseItem=(props)=>{
    const clickHandler= ()=> {
        console.log('Clicked!!!');
    }
    const deleteHandler=()=>{
        console.log('Deleted');
    }
    return ( 
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__location'>{props.location}</div>
        <div className='expense-item__price'>Rs {props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
    </div>
       
    </div>
    )
}


export default ExpenseItem;