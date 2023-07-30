import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'

import './Date.scss'
import sunny from '../assets/sunny.png'

const Date = () => {
   const [currentTime, setCurrentTime] = useState(new window.Date())

   //Time computations
   const monthWord = currentTime.toLocaleString(undefined, { month: 'long' })
   const dayOfMonth = currentTime.getDate()
   const year = currentTime.getFullYear()
   const minutes = currentTime.getMinutes()
   const formattedMinutes = minutes.toString().padStart(2, '0')
   const hours = currentTime.getHours() % 12 || 12
   const meridiem = currentTime.getHours() < 12 ? 'AM' : 'PM'
   const currentDay = currentTime.toLocaleString(undefined, { weekday: 'long' })

   // console.log(currentTime)
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
