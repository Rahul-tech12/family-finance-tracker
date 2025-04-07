import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

const Income = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const [income, setIncome] = useState('')
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }

    const showIncome=async(req,res)=>{
        try {
          const res=await axios.get('http://localhost:8080/api/v1/auth/gettransaction')
          if(res && res.data.message=='Transaction done successfully'){
            console.log(res.data)
            if(res.data && res.data.transaction && res.data.transaction.category=='income'){
              setIncome(res.data.transaction.amount)
            }
          }
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
        showIncome()
      },[])
  return (
    <div className='income'>
        <div className='body'>
              <input type='search' placeholder='Search categories' />
               <div className='income-category'>
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <th>
                            <select>Income
                                <option value='salary'>Salary</option>
                                <option value='bankinterest'>Bank interest</option>
                                <option value='rent'>Rental properties</option>
                            </select>
                        </th>
                        <td>
                            {income}
                        </td>
                    </tr>
                </table>
               </div>
            </div>
    </div>
  )
}

export default Income