import React from 'react'
import './TrackList.scss'
import ListFilter from './ListFilter'
import TrackData from './TrackData'

const TrackList = (props) => {
   return (
      <div className='track-list'>
         <ListFilter />
         <TrackData />
      </div>
   )
}

export default TrackList
