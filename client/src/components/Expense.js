import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'


const Expense = () => {
  const [expense, setExpense] = useState('')
  const [startDate, setStartDate] = useState(new Date());
      const [endDate, setEndDate] = useState(null);
      const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      }

      const showExpense=async(req,res)=>{
              try {
                const res=await axios.get('http://localhost:8080/api/v1/auth/gettransaction')
                if(res && res.data.message=='Transaction done successfully'){
                  console.log(res.data)
                  if(res.data && res.data.transaction && res.data.transaction.category!=='income'){
                    setExpense(res.data.transaction.amount)
                  }
                }
              } catch (error) {
                console.log(error)
              }
            }
      
            useEffect(()=>{
              showExpense()
            },[])

  return (
    <div className='expense'>
      <div className='body'>
              <input type='search' placeholder='Search categories' />
              <div className='expense-category'>
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <th>
                            <select>Expense
                                <option value="food">Food</option>
                                <option value='Flat/house'>Flat/house</option>
                                <option value='Transport'>Transport</option>
                                <option value='Telecommunications'>Telecommunications</option>
                                <option value='Healthcare'>Healthcare</option>
                                <option value='Clothes'>Clothes</option>
                                <option value='Hygiene'>Hygiene</option>
                                <option value='Children'>Children</option>
                                <option value='Other expenses'>Other expenses</option>
                            </select>
                        </th>
                        <td>
                          {expense}
                        </td>
                    </tr>
                </table>
               </div>
            </div>
    </div>
  )
}

export default Expense