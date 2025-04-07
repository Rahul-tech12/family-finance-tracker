import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'

const Operations = () => {
const [operation, setOperation] = useState([])

  const showOperation=async(req,res)=>{
    try {
      const res=await axios.get('http://localhost:8080/api/v1/auth/transaction')
      if(res && res.data.message=='Transaction done successfully'){
        console.log(res.data)
        if(res.data && res.data.transaction){
          setOperation(res.data.transaction)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    showOperation()
  },[])
  return (
        <div className='operations'>
        <div className='operation-category'>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Account</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                      {operation.map((info,index)=>{
                        return(
                          <div key={index}>
                            <td>{info.date}</td>
                            <td>{info.category}</td>
                            <td>{info.account}</td>
                            <td>{info.amount}</td>
                          </div>
                        )
                      })}
                    </tr>
                </table>
               </div>
        </div>
  )
}

export default Operations