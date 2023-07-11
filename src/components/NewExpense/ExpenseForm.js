import './ExpenseForm.css';

const ExpenseForm=()=>{
    const titleChangedHandler= (event)=>{
        console.log(event.target.value);

    }
return (
<form>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangedHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number"/>
        </div>
    </div><div className="new-expense__control">
            <label>Date</label>
            <input type="date"/>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button> 
        </div>
</form>
)
}

export default ExpenseForm;