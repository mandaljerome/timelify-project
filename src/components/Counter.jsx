import React, { useState, useRef } from 'react'

import { entryModalAction } from '../store/task'
import { taskAction } from '../store/task'
import { useDispatch } from 'react-redux'
import { timeFormatter } from '../helper/time'

import './Counter.scss'
import play from '../assets/play.png'
import pause from '../assets/pause.png'
import stop from '../assets/stop.svg'
import add from '../assets/add.svg'
import error from '../assets/error.svg'

const Counter = () => {
   const dispatch = useDispatch()

   const titleRef = useRef()
   const descRef = useRef()

   const [elapsedTime, setElapsedTime] = useState(0)
   const [intervalId, setIntervalId] = useState(0) // this is to set a new ID to the interval so I can pause it using different function
   const [isRunning, setIsRunning] = useState(false)
   const [disableText, setDisableText] = useState(false)
   const [errorAuth, setErrorAuth] = useState(false)

   // time calculaion
   const hours = Math.floor(elapsedTime / 3600)
   const formattedHours = String(hours).padStart(2, 0)
   const minutes = Math.floor((elapsedTime % 3600) / 60)
   const formattedMinutes = String(minutes).padStart(2, 0)
   const seconds = elapsedTime % 60

   //This is to show the entry modal
   const showModalEntryHandler = () => {
      dispatch(entryModalAction.show())
   }

   //This is to start the timer
   const startTimerHandler = () => {
      if ((titleRef.current.value === '') & (descRef.current.value === '')) {
         setErrorAuth(true)

         return
      }

      if (!isRunning) {
         setIsRunning(true)
         setErrorAuth(false)
         const intervalId = setInterval(() => {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + 1)
         }, 1000)
         setIntervalId(intervalId)
         setIsRunning(true)
         setDisableText(true)
      }
   }

   //This is to pause the timer
   const pauseTimerHandler = () => {
      clearInterval(intervalId)
      setIsRunning(false)
   }

   // To stop the timer and submit data.
   const stopTimerHandler = () => {
      // this is the time formatter a helper function
      const time = timeFormatter()

      dispatch(
         taskAction.addNewTask({
            title: titleRef.current.value,
            description: descRef.current.value,
            numberSeconds: elapsedTime,
            date: time.fullDate,
            time: time.fullTime,
         })
      )

      setIsRunning(false)
      clearInterval(intervalId)
      setElapsedTime(0)
      setDisableText(false)

      titleRef.current.value = ''
      descRef.current.value = ''
   }

   return (
      <div className='tracker-counter'>
         <img
            src={add}
            alt='add'
            className='add'
            onClick={showModalEntryHandler}
         />
         <div className='tracker-count'>
            <div className='main'>
               <h2>{formattedHours}:</h2>
               <h2>{formattedMinutes}</h2>
            </div>
            <div className='sec'>
               <h2 className='seconds'>{seconds}</h2>
               <p>sec</p>
            </div>
         </div>
         {errorAuth && (
            <div className='error'>
               <img src={error} alt='' />
               <p>Please fill the task details!</p>
            </div>
         )}
         <select
            id='dropdown'
            className='dropdown'
            placeholder='Select a task to start'
            ref={titleRef}
            disabled={disableText}
         >
            <option value=''>Select a Task</option>
            <option value='Front-End Task'>Front-End Task</option>
            <option value='Back-End Task'>Back-End Task</option>
            <option value='UI/UX Design Task'>UI/UX Task</option>
            <option value='Graphic Design Task'>Graphic Design Task</option>
            <option value='Bug Removal'>Bug Removal</option>
         </select>

         <textarea
            rows='2'
            placeholder='Task Description'
            className='description'
            style={disableText ? { opacity: 0.6 } : {}}
            ref={descRef}
            disabled={disableText}
            required
         ></textarea>

         <div className='buttons'>
            {/* Just simply hiding the buttons when timer start */}

            {isRunning ? (
               <img
                  src={pause}
                  alt=''
                  className='pause big-button'
                  onClick={pauseTimerHandler}
               />
            ) : (
               <img
                  src={play}
                  alt=''
                  onClick={startTimerHandler}
                  className='play big-button'
               />
            )}
            {isRunning && (
               <img
                  src={stop}
                  alt=''
                  onClick={stopTimerHandler}
                  className='stop'
               />
            )}
         </div>
      </div>
   )
}

export default Counter
