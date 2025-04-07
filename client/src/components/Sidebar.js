import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'

const Sidebar = () => {
    const [value, setValue] = useState('')
  return (
    <div className='sidebar'>
        <i class="fa-solid fa-bars"></i>
        <img src='https://th.bing.com/th/id/OIP.j4w9umGfqA5rnecAheCqXgHaF7?w=264&h=211&c=7&r=0&o=5&pid=1.7' />
        <h3>Family Finance Tracker</h3>
        <select>
            <option value='budget'>My Budget</option>
        </select>
        <div className='sidebar-tabs'>
            <div className='tab1'>
                <i class="fa-solid fa-house"></i>
                <NavLink to='admin/finance' onClick={()=>setValue(value)} value='My finances'>My finances</NavLink>
            </div>
            <div className='tab1'>
                <i class="fa-solid fa-list"></i>
                <NavLink to='admin/operations' onClick={()=>setValue(value)} value='Operations'>Operations</NavLink>
            </div>
            <div className='tab1'>
                <i class="fa-solid fa-clock"></i>
                <NavLink to='admin/schedule' nClick={()=>setValue(value)} value='Schedule'>Scheduled</NavLink>
            </div>
            <div className='tab1'>
                <i class="fa-solid fa-bullseye"></i>
                <NavLink to='admin/goals' onClick={()=>setValue(value)} value='Goals'>Goals</NavLink>
            </div>
            <div className='tab1'>
                <i class="fa-solid fa-chart-line"></i>
                <NavLink to='admin/reports' onClick={()=>setValue(value)} value='Reports'>Reports</NavLink>
            </div>
            <div className='tab1'>
                <i class="fa-solid fa-piggy-bank"></i>
                <NavLink to='admin/account' onClick={()=>setValue(value)} value='Accounts'>Accounts</NavLink>
            </div>
            <div className='tab1'>
                <i class="fa-solid fa-clipboard-list"></i>
                <NavLink to='admin/categories' onClick={()=>setValue(value)} value='Categories'>Categories</NavLink>
            </div>
            <div className='tab1'>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <button>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar