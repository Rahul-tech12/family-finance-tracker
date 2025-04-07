import React, { useState } from 'react'
import Layout from '../../components/Layout.js'
import Income from './Income.js'
import Expense from '../../components/Expense.js'


const MyFinance = () => {
  const [showIncome, setShowIncome] = useState(false)
  const [showExpense, setShowExpense] = useState(false)
  
  return (
        <div className='my-finance'>
            <div className='tabs'>
             <button onClick={()=> setShowIncome(!showIncome)}>{showIncome?'Hide income':'Show income'}</button>
              {showIncome && <Income />}
             <button onClick={()=> setShowExpense(!showExpense)}>{showExpense?'Hide expense':'Show expense'}</button>
              {showExpense && <Expense />}
            </div>
        </div>
  )

}

export default MyFinance