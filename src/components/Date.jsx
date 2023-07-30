import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { timeFormatter } from '../helper/time'

import './Date.scss'
import sunny from '../assets/sunny.png'

const Date = () => {
   const [currentTime, setCurrentTime] = useState(new window.Date())

   //Time computations function
   const {
      monthWord,
      dayOfMonth,
      year,
      currentDay,
      hours,
      formattedMinutes,
      meridiem,
   } = timeFormatter(currentTime)

   useEffect(() => {
      // Update the time every second (1000 milliseconds)
      const intervalId = setInterval(() => {
         setCurrentTime(new window.Date())
      }, 1000)

      return () => {
         clearInterval(intervalId)
      }
   }, [])

   return (
      <div className='date-header'>
         <img src={sunny} alt='' className='weather' />
         <div className='date-day'>
            <p>
               {monthWord} {dayOfMonth}, {year}
            </p>
            <p>{currentDay}</p>
         </div>
         <p className='time'>
            {hours}:{formattedMinutes}{' '}
            <span className='time-identifier'>{meridiem}</span>
         </p>
      </div>
   )
}

export default Date
