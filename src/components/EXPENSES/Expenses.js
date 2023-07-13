import ExpenseItem from './Expenseitem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import React , {useState} from 'react';
function Expenses(props){
    const [filteredYear,  SetFilteredYear]= useState('2023');
    const filterChangedHandler = selectedYear=>{
      SetFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
  });
  return(
    <div className="expenses">

    <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangedHandler}/>
    {filteredExpenses.map( (expense) => (<ExpenseItem 
    key={expense.id}
    title={expense.title} 
    amount={expense.amount}
    date={expense.date}/>
    ))}
    
    </div>
  )
}
export default Expenses ;
