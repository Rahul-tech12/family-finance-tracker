import React from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate=useNavigate()
    navigate('/login')
  return (
    <Layout>
        <div className='homepage'>
            <h1>Homepage</h1>
        </div>
    </Layout>
  )
}

export default Homepage