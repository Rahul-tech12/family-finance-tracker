import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const navigate=useNavigate()
        
        const handleSubmit=async(e)=>{
           try {
            e.preventDefault()
            const res=await axios.post('http://localhost:8080/api/v1/auth/login',{email,password})
            if(res && res.data.message=='Login successfully'){
                console.log(res.data)
                toast('Login successfully')
                setTimeout(()=>{
                    navigate('/dashboard')
                },6000)
            }else{
                toast('Something went wrong')
            }
           } catch (error) {
                console.log(error)
            }
        }
  return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type='text' placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
                <label>Password</label>
                <input type='text' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} value={password} required />
                <button type='submit'>Login</button>
            </form>
            <ToastContainer />
        </div>
  )
}

export default Login