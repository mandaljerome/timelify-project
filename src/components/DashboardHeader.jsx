import React from 'react'
import './DashboardHeader.scss'

import logo from '../assets/logo-white.png'
import { useDispatch, useSelector } from 'react-redux'
import { authAction } from '../store/auth'

// Header of the dashboard
// nothing fancy te only fuction here
// is to logout the dashboard

const DashboardHeader = () => {
   const dispatch = useDispatch()
   const auth = useSelector((state) => state.auth.authLogin)

   //To logout the dashboard.
   const logoutHandler = () => {
      dispatch(authAction.logout())
   }

   return (
      <div className='dashboard-header'>
         <div className='header-container'>
            <img src={logo} alt='logo-white' className='logo' />
            <div className='action-icons'>
               <i className='fa-solid fa-circle-user'></i>
               <i className='fa-solid fa-power-off' onClick={logoutHandler}></i>
            </div>
         </div>
      </div>
   )
}

export default DashboardHeader
