import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cnfpassword, setCnfPassword] = useState("")
    const navigate=useNavigate()
    
    const handleSubmit=async(e)=>{
       try {
        e.preventDefault()
        const res=await axios.post('http://localhost:8080/api/v1/auth/register',{email,password,cnfpassword})
        if(res && res.data.message){
            toast.success(res.data & res.data.message)
            navigate('/login')
        }else{
            toast.error(res.data.message)
        }
       } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
       }
    }

  return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type='text' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                <label>Password</label>
                <input type='text' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} value={password} required />
                <label>Confirm Password</label>
                <input type='text' placeholder='Enter password again' onChange={(e)=>setCnfPassword(e.target.value)} value={cnfpassword} required/>
                <button type='submit'>Register</button>
            </form>
        </div>
  )
}

export default Register