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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
