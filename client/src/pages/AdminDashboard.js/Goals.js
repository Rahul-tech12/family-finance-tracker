import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout.js'
import GoalForm from '../../components/GoalForm.js'
import axios from 'axios'

const Goals = () => {
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState([])
  const [curramount, setCurrAmount] = useState([])
  const [targamount, setTargAmount] = useState([])
  const openForm=()=>{
    setShowForm(true)
  }
  const closeForm=()=>{
    console.log('Form is closed')
    setShowForm(false)
  }
  const showIncome=async(req,res)=>{
    try{
      const res=await axios.get('http://localhost:8080/api/v1/auth/milestones')
      if(res && res.data.message=='Milestone added successfully'){
        console.log(res.data)
        if(res.data && res.data.milestone){
          setName(res.data.milestone.name)
          setCurrAmount(res.data.milestone.currAmount)
          setTargAmount(res.data.milestone.targamount)
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
        <div className='goals'>
            <div className='tabs'>
              <button onClick={openForm}>Add new goal</button>
              <input type='search' placeholder='Search' />
              {showForm && <GoalForm closeForm={closeForm} />}
            </div>
            <div className='goals-table'>
                <table>
                    <thead>
                      <tr>
                        <th>Progress</th>
                        <th>Goal name</th>
                        <th>Gathered Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {name.map((accName,index)=>{
                            return(
                              <p key={index}>{accName}</p>
                            )
                          })}
                        </td>
                        <td>
                          {curramount.map((amount,index)=>{
                            return(
                              <p key={index}>{amount}</p>
                            )
                          })}
                        </td>
                        <td>
                          {targamount.map((amount,index)=>{
                            return(
                              <p key={index}>{amount}</p>
                            )
                          })}
                        </td>
                      </tr>
                    </tbody>
                </table>
               </div>
        </div>
  )
}

export default Goals