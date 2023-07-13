import ExpenseItem from './Expenseitem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import React , {useState} from 'react';
function Expenses(props){
    const [filteredYear,  SetFilteredYear]= useState('2020');
    const filterChangedHandler = selectedYear=>{
      SetFilteredYear(selectedYear);
    };
  return(
    <div className="expenses">

    <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangedHandler}/>
    {props.items.map( (expense) => (<ExpenseItem 
    key={expense.id}
    title={expense.title} 
    amount={expense.amount}
    date={expense.date}/>
    ))}
    
    </div>
  )
}
export default Expenses ;
