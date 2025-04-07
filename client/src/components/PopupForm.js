import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const PopupForm = ({closeForm}) => {
    const [category, setCategory] = useState('')
    const [transaction, setTransaction] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [account, setAccount] = useState('')


    const handleSubmit=async(e)=>{
        try {
            e.preventDefault()
            alert('Operation added')
            closeForm()
            const res=await axios.post('http://localhost:8080/api/v1/auth/transaction',{category,transaction,amount,date,account})
            if(res.data && res.data.message=='Transaction done successfully'){
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
                <h3>Add Operation</h3>
                <button className='exincome' onClick={()=>setTransaction('Expense/Income')}>Expense/Income</button>
                <button className='transfer' onClick={()=>setTransaction('transfer')}>Transfer</button>
                <button className='close' onClick={closeForm}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div className='form-input'>
                <b>Operation Amount</b>
                <input type='text' placeholder='0.00' onChange={(e)=>setAmount(e.target.value)} value={amount}/>
            </div>
            <div className='form-input'>
                <b>Date</b>
                <input type='text' placeholder='dd/mm/yyyy' onChange={(e)=>setDate(e.target.value)} value={date}/>
            </div>
            <div className='form-input'>
                <b>Account</b>
                <input type='text' placeholder='Account name' onChange={(e)=>setAccount(e.target.value)} value={account}/>
            </div>
            <div className='form-input'>
                <b>Category</b>
                <select onChange={(e)=>setCategory(e.target.value)} value={category}>
                    <option value='income'>Income</option>
                    <option value='food'>Food</option>
                    <option value='flat/house'>Flat/house</option>
                    <option value='transport'>Transport</option>
                    <option value='telecommunications'>Telecommunications</option>
                    <option value='healthcare'>Healthcare</option>
                    <option value='clothes'>Clothes</option>
                    <option value='repayment of debts'>Repayment of debts</option>
                    <option value='others'>Other expenses</option>
                </select>
            </div>
            <button className='submit' type='submit'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default PopupForm