import React, { useState } from 'react'
import PopupForm from './PopupForm.js'

const Header = ({value}) => {
  const [showForm, setShowForm] = useState(false)

  const openForm=()=>{
    setShowForm(true)
  }
  const closeForm=()=>{
    setShowForm(false)
  }

  return (
    <>
    <div className='header'>
      <h3>{value}</h3>
      <button onClick={openForm}>Add Operation</button>
      {showForm && <PopupForm closeForm={closeForm} />}
      <img src='https://static-00.iconduck.com/assets.00/settings-icon-2048x2048-ht9jo5se.png' id='settings'/>
      <img src='https://th.bing.com/th/id/OIP.TnaLkPBdgkSxXx915NOyGQHaHa?w=195&h=195&c=7&r=0&o=5&pid=1.7' id='query'/>
      <img src='https://cdn-icons-png.flaticon.com/256/251/251376.png' id='logout'/>
    </div>
    </>
  )
}

export default Header