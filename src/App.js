//import logo from './logo.svg';
//import './App.css';

import ExpenseItem from './components/Expenseitem';
function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Big Bazaar'
    },
    { 
      id: 'e2',
       title: 'New TV', 
       amount: 14500, 
       date: new Date(2021, 2, 12),
       location: 'Croma Showroom'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 2500,
      date: new Date(2021, 2, 28),
      location: 'Maruti Showroom'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 950,
      date: new Date(2021, 5, 12),
      location: 'Furniture Market'
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} 
      amount={expenses[0].amount}
      date={expenses[0].date}
      location={expenses[0].location}>
      </ExpenseItem>
      <ExpenseItem title={expenses[1].title} 
      amount={expenses[1].amount}
      date={expenses[1].date}
      location={expenses[1].location}>
      </ExpenseItem>
      <ExpenseItem title={expenses[2].title} 
      amount={expenses[2].amount}
      date={expenses[2].date}
      location={expenses[2].location}>
      </ExpenseItem>
      <ExpenseItem title={expenses[3].title} 
      amount={expenses[3].amount}
      date={expenses[3].date}
      location={expenses[3].location}>
      </ExpenseItem>
    </div>
  );
}

export default App;
