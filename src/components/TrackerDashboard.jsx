import React from 'react'
import './TrackerDashboard.scss'
import DashboardHeader from './DashboardHeader'
import Tracker from './Tracker'
import TrackList from './TrackList'

const TrackerDashboard = () => {
   return (
      <div className='tracker-dashboard'>
         <div className='container'>
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
