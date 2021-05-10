import "./ExpenseForm.css"
import React, {useState} from 'react';
function ExpenseForm(props){
    const [enteredTitle,setEnteredTitle]=useState('')
    const [enteredAmount,setEnteredAmount]=useState('')
    const[enteredDate,setEnteredDate]=useState('')
    function submitHandler(event){
        event.preventDefault()
        const expensedata={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
            
        }
        props.onSaveExpenseData(expensedata);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
        }
        
    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value)
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value)
    }
    function cancelHandler(){
        props.onCancel()
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2020-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
            <button type='button' onClick={cancelHandler}>Cancel</button>
                <button type='submit'>Add Expense</button>
                
            </div>
        </form>
    )
}
export default ExpenseForm