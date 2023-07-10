//import logo from './logo.svg';
//import './App.css';
import Expenses from './components/EXPENSES/Expenses';


const App=()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Vishal MegaMart'
    },
    { 
      id: 'e2',
       title: 'New TV', 
       amount: 99.45, 
       date: new Date(2021, 2, 12),
       location: 'Vijay Sales'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 25.39,
      date: new Date(2021, 2, 28),
      location: 'Car Showroom'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 95.01,
      date: new Date(2021, 5, 12),
      location: 'Furniture Market'
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
