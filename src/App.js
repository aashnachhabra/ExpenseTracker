
import React,{ useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from "./components/NewExpense/NewExpense"
const defaultExpenses = []
function App(){
  const [expenses,setExpenses]= useState(defaultExpenses)
  function addExpenseHandler(expense){
   setExpenses(prevExpenses =>{
    return [expense, ...prevExpenses]}
   )
  }
  return (<div>
    <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
    <Expenses items={expenses}></Expenses>
    </div>
  )
}
export default App;