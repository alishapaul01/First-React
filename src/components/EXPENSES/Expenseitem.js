import React, {useState} from 'react';
import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';

const ExpenseItem=(props)=>{

   const [amount, setAmount]= useState(props.amount);
   const [title, setTitle]= useState(props.title);
    

    const clickHandler= ()=> {
        setAmount('100');
        console.log(amount);
    }
    const titleHandler= ()=> {
        setTitle('updated');
        console.log(title);
    }
    const deleteHandler=()=>{
        console.log('Deleted');
    }
    return ( 
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__location'>{props.location}</div>
        <div className='expense-item__price'>${amount}</div>
        <button onClick={titleHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
        <button onClick={clickHandler}>Change Expense</button>
    </div>
       
    </div>
    )
}


export default ExpenseItem;