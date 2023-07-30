import React from 'react'
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

   // This filter the data thats enter in the List Item Component

   if (filteredData === 'all') {
      if (filteredData) dispatch(filterAction.filterSearchDeactivated())
      filterArray = data
   }

   if (filteredData === 'today') {
      if (filteredData) dispatch(filterAction.filterSearchDeactivated())

      filterArray = data.filter((item) => {
         return item.date === date.fullDate
      })
   }

   if (filteredData === 'search') {
      dispatch(filterAction.filterSearchActivated())
   }

   if (filteredData === 'lastSeven') {
      filterArray = data.filter((item) => {
         const convertedDataDate = new Date(item.date)
         const convertedCurrentDate = new Date(date.fullDate)

         return item.date === date.fullDate
      })
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
