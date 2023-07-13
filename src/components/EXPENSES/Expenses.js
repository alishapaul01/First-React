import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import React , {useState} from 'react';
import ExpensesList from './ExpensesList';
import Card from "../UI/Card";

function Expenses(props){
    const [filteredYear,  SetFilteredYear]= useState('2023');
    const filterChangedHandler = selectedYear=>{
      SetFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
  });

  return(
    <Card className="expenses">
 
    <ExpensesFilter selected ={filteredYear} onChangeFilter={filterChangedHandler}/>
    <ExpensesList items ={filteredExpenses}/>
    
    </Card>
  )
}
export default Expenses ;
