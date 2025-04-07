import React from 'react'

const Summary = () => {
  return (
    <div className='summary'>
        <h3>Summary</h3>
        <div className='budget'>
            <p>Budget plan:</p>
            <b>To be budgeted:</b>
        </div>
        <div className='cashflow'>
            <p>Income:</p>
            <p>Expense:</p>
            <p>Savings:</p>
            <p>Debt repayment:</p>
        </div>
        <b>Total account balance:</b>
    </div>
  )
}

export default Summary