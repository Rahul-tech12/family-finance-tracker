import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AccountForm = ({closeForm}) => {
    const [currency, setCurrency] = useState('')
    const [acctype, setAcctype] = useState('')
    const [accname, setAccname] = useState('')
    const [balance, setBalance] = useState('')
    const [name, setName] = useState('')

    const handleSubmit=async(e)=>{
        try {
            e.preventDefault()
            closeForm()
            const res=await axios.post('http://localhost:8080/api/v1/auth/account',{name,accname,currency,balance,acctype})
            if(res.data && res.data.message=='Account created successfully'){
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
                <h3>Add account</h3>
                <button onClick={closeForm}><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div className='form-input'>
                <b>Enter account name</b>
                <input type='text' onChange={(e)=>setAccname(e.target.value)} value={accname}/>
            </div>
            <div className='form-input'>
                <b>Balance</b>
                <input type='text' placeholder='0' onChange={(e)=>setBalance(e.target.value)} value={balance}/>
            </div>
            <div className='form-input'>
                <b>Currency</b>
                <select onChange={(e)=>setCurrency(e.target.value)} value={currency}>
                    <option value='Indian Rupee'>Indian Rupee(INR)</option>
                    <option value='Iraqi Dinar'>Iraqi Dinar(IQD)</option>
                    <option value='Japanese Yen'>Japanese Yen(JPY)</option>
                    <option value='Kuwaiti Dinar'>Kuwaiti Dinar(KWD)</option>
                    <option value='US Dollar'>US Dollar(USD)</option>
                    <option value='Euro'>Euro(EUR)</option>
                </select>
            </div>
            <div className='form-input'>
                <b>Account type</b>
                <select onChange={(e)=>setAcctype(e.target.value)} value={acctype}>
                    <option value='Cash'>Cash</option>
                    <option value='Bank Account'>Bank Account</option>
                    <option value='Target Fund'>Target Fund</option>
                    <option value='Investment'>Investment</option>
                    <option value='Credit Card'>Credit Card</option>
                    <option value='Loan'>Loan</option>
                </select>
            </div>
            <div className='form-input'>
                <b>Name on Bank Statement</b>
                <input type='text' onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <button type='submit'>Save</button>
            </form>
        </div>
    </div>
  )
}

export default AccountForm