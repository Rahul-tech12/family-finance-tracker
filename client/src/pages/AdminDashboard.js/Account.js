import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import AccountForm from '../../components/AccountForm'
import axios from 'axios'

const Account = () => {
  const [showForm, setShowForm] = useState(false)
  const [accname, setAccname] = useState([])
  const [balance, setBalance] = useState([])
  const openForm=()=>{
    setShowForm(true)
  }
  const closeForm=()=>{
    setShowForm(false)
  }
  const showIncome=async(req,res)=>{
    try {
      const res=await axios.get('http://localhost:8080/api/v1/auth/account')
      if(res && res.data.message=='Account added successfully'){
        console.log(res.data)
        if(res.data && res.data.account){
          setAccname(res.data.milestone.name)
          setBalance(res.data.milestone.currAmount)
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
    <div className='account'>
        <div className='account'>
        <div className='tabs'>
              <button onClick={openForm}>Add account</button>
              <input type='search' placeholder='Search for account' />
              {showForm && <AccountForm closeForm={closeForm} />}
            </div>
            <div className='goals-table'>
                <table>
                    <tr>
                        <th>Account</th>
                        <th>Balance</th>
                    </tr>
                    <tr>
                        <td>
                          {accname.map((accName,index)=>{
                            return(
                              <p key={index}>{accName}</p>
                            )
                          })}
                        </td>
                        <td>
                          {balance.map((amount,index)=>{
                            return(
                              <p key={index}>{amount}</p>
                            )
                          })}
                        </td>
                    </tr>
                </table>
               </div>        </div>
    </div>
  )
}

export default Account