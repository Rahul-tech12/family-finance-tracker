import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import MyFinance from './pages/AdminDashboard.js/MyFinance.js';
import Operations from './pages/AdminDashboard.js/Operations.js';
import Scheduled from './pages/AdminDashboard.js/Scheduled.js';
import Goals from './pages/AdminDashboard.js/Goals.js';
import Account from './pages/AdminDashboard.js/Account.js';
import Categories from './pages/AdminDashboard.js/Categories.js';
import Reports from './pages/AdminDashboard.js/Reports.js';
import Sidebar from './components/Sidebar.js';
import Header from './components/Header.js';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('')
  return (
    <div className="App">
      <Sidebar setValue={setValue} />
      <Header value={value}/>
      
     <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='admin/finance' element={<MyFinance />} />
        <Route path='admin/operations' element={<Operations />}/>
        <Route path='admin/schedule' element={<Scheduled />}/>
        <Route path='admin/goals' element={<Goals />}/>
        <Route path='admin/reports' element={<Reports />}/>
        <Route path='admin/account' element={<Account />}/>
        <Route path='admin/categories' element={<Categories />}/>
     </Routes>
    </div>
  );
}

export default App;
