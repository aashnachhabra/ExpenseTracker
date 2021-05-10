import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import React, {useState} from 'react'
function NewExpense(props){
    const [isEditing, setIsEditing]=useState(false)
    function saveExpenseDataHandler (enteredExpenseData){
        const expenseData={id: Math.random().toString(),...enteredExpenseData
        }
        props.onAddExpense(expenseData)
    }
    function startEditingHandler(){
        setIsEditing(true)
    }
    function stopEditing(){
        setIsEditing(false)
    }
return(
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}></ExpenseForm>}
        
    </div>
)
}
export default NewExpense;