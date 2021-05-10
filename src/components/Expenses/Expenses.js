import "./Expenses.css"
import React, {useState} from 'react'
import ExpensesFilter from "./ExpensesFilter"
import ExpenseItem from "./ExpenseItem"
import ExpensesChart from "./ExpensesChart"
function Expenses(props){
    const [filteredYear,setFilteredYear]=useState('2020')
    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear)
    }
    const filteredExpenses=props.items.filter(function (expense){
        return (expense.date.getFullYear().toString()===filteredYear)
        
    })
    let expenseContent=<p>Sorry, no expense found!</p>
    if(filteredExpenses.length>0){
    expenseContent=filteredExpenses.map(expense=>(<ExpenseItem 
    key={expense.id}
    title={expense.title} 
    amount={expense.amount} 
    date={expense.date}/>))

    }
return(<div className="expenses">
    <ExpensesFilter onFilterChange={filterChangeHandler}></ExpensesFilter>
  {expenseContent}
  <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
  </div>
)
}
export default Expenses