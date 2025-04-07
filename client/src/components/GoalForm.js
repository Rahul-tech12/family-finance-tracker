import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const GoalForm = ({closeForm,value}) => {
    const [name, setName] = useState('')
    const [account, setAccount] = useState('')
    const [curramount, setCurrAmount] = useState('')
    const [targamount, setTargAmount] = useState('')
    const [start, setStart] = useState('')
    const [finish, setFinish] = useState('')

    const handleSubmit=async(e)=>{
            try {
                e.preventDefault()
                if (typeof closeForm === "function") {
                    closeForm(); // Close the form after submission
                  } else {
                    console.error("closeForm is not a function!");
                  }
                const res=await axios.post('http://localhost:8080/api/v1/auth/admin/milestones',{name,account,curramount,targamount,start,finish})
                if(res.data && res.data.message==='Milestone added successfully'){
                    console.log(res.data)
                    toast(res.data.message)
                }else{
                    toast('Something went wrong')
                }
                } catch (error) {
                    console.log(error)
                }
            }
  return (
    <div className='popup-overlay'>
        <div className='popup-form'>
            <form onSubmit={handleSubmit}>
            <div className='title-bar'>
                <h3>Set your goal</h3>
                <button onSubmit={closeForm}>Close</button>
            </div>
            <div className='form-input'>
                <b>Enter goal name</b>
                <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div className='form-input'>
                <b>Account name</b>
                <input type='text' onChange={(e)=>setAccount(e.target.value)} value={account}/>
            </div>
            <div className='form-input'>
                <b>Current amount</b>
                <input type='text' placeholder='0' onChange={(e)=>setCurrAmount(e.target.value)} value={curramount}/>
            </div>
            <div className='form-input'>
                <b>Target amount</b>
                <input type='text' placeholder='0' onChange={(e)=>setTargAmount(e.target.value)} value={targamount}/>
            </div>
            <div className='form-input'>
                <b>Started</b>
                <input type='text' placeholder='dd/mm/yyyy' onChange={(e)=>setStart(e.target.value)} value={start}/>
            </div>
            <div className='form-input'>
                <b>Finish</b>
                <input type='text' placeholder='dd/mm/yyyy' onChange={(e)=>setFinish(e.target.value)} value={finish}/>
            </div>
            <button type='submit'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default GoalForm