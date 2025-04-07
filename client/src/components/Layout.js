import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Summary from './Summary'

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Header />
        <Sidebar />
        <main>
            {children}
        </main>
        <Summary />
    </div>
  )
}

export default Layout