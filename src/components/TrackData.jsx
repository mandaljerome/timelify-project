import React from 'react'
import { useSelector } from 'react-redux'

import ListItem from './ListItem'

import './TrackData.scss'

// This is the component where the task data pass to create
// list of task UI

const TrackData = () => {
   const data = useSelector((state) => state.task)

   return (
      <div className='track-data'>
         {data
            .map((item) => (
               <ListItem
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  numberSeconds={item.numberSeconds}
                  date={item.date}
                  time={item.time}
                  icon={item.icon}
               />
            ))
            .reverse()}
      </div>
   )
}

export default TrackData
