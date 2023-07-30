import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { timeFormatter, pastSevenDays } from '../helper/time'
import ListItem from './ListItem'
import { filterAction } from '../store/task'

import './TrackData.scss'

// This is the component where the task data pass to create
// list of task UI

const TrackData = () => {
   const dispatch = useDispatch()
   const data = useSelector((state) => state.task)
   const date = timeFormatter()
   const seven = pastSevenDays()
   const filteredData = useSelector((state) => state.filter.filterData)

   let filterArray = []

   //To get the total time in the filter
   const getTotalSec = () => {
      const total = filterArray.reduce((oldValue, newValue) => {
         return oldValue + newValue.numberSeconds
      }, 0)
      dispatch(filterAction.totalTimeHandler(total))
   }

   // This filter the data thats enter in the List Item Component

   // To filter all the task data
   if (filteredData === 'all') {
      filterArray = data
      getTotalSec()
   }

   //To filter the data inputed today.
   if (filteredData === 'today') {
      filterArray = data.filter((item) => {
         return item.date === date.fullDate
      })
      getTotalSec()
   }

   //To filter the date last seven days ago
   if (filteredData === 'sevenDays') {
      const currentDate = new window.Date()
      filterArray = data.filter((item) => {
         const date = item.date
         const diffInTime = currentDate - new Date(date)
         const diffInDays = diffInTime / (1000 * 3600 * 24)
         return diffInDays <= 7
      })
      getTotalSec()
   }

   return (
      <div className='track-data'>
         {filterArray
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
