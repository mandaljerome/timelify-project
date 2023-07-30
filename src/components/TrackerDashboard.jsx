import React, { useState } from 'react'
import DashboardHeader from './DashboardHeader'
import Tracker from './Tracker'
import TrackList from './TrackList'
import TaskEntry from '../UI/TaskEntry'
import { useSelector } from 'react-redux'

import './TrackerDashboard.scss'

const TrackerDashboard = () => {
   const modal = useSelector((state) => state.entryModal.showModal)

   return (
      <div className='tracker-dashboard'>
         <div className='container'>
            {modal && <TaskEntry />}
            <DashboardHeader />
            <div className='component-control'>
               <Tracker />
               <TrackList />
            </div>
         </div>
      </div>
   )
}

export default TrackerDashboard
