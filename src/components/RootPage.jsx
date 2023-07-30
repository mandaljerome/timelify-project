import React from 'react'
import Login from './Login'
import Register from '../UI/Register'
import { useSelector } from 'react-redux'
import TrackerDashboard from './TrackerDashboard'

// This is the routing page I didn't use any router anymore
// because its only a simple applicaiton with 2 path approximately

const RootPage = () => {
   const regShow = useSelector((state) => state.registration.regShow)
   const authenticated = useSelector((state) => state.auth.authLogin)

   return (
      <div className='welcome-page'>
         {regShow && <Register />}
         {!authenticated && <Login />}
         {authenticated && <TrackerDashboard />}
      </div>
   )
}

export default RootPage
