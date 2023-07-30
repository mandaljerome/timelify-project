import React, { useState, useRef, useEffect } from 'react'
import { entryModalAction, taskAction } from '../store/task'
import { useDispatch } from 'react-redux'

import './TaskEntry.scss'
import success from '../assets/success.svg'

const TaskEntry = () => {
   const dispatch = useDispatch()

   const [setsuccessEntry, setSetsuccessEntry] = useState(false)

   const titleRef = useRef()
   const descriptionRef = useRef()
   const dateRef = useRef()
   const hoursRef = useRef()
   const minutesRef = useRef()

   useEffect(() => {
      document.body.classList.add('no-scroll')
      return () => {
         document.body.classList.remove('no-scroll')
      }
   }, [])

   // To close the modal entry.
   const hideModalHandler = () => {
      dispatch(entryModalAction.hide())
      setSetsuccessEntry((state) => !state)
   }

   // This is to submit the date in the store
   const submitEntryHandler = (e) => {
      e.preventDefault()

      dispatch(
         taskAction.addNewTask({
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value,
            minutes: minutesRef.current.value,
            hours: hoursRef.current.value,
         })
      )
      setSetsuccessEntry((state) => !state)
      titleRef.current.value = ''
      descriptionRef.current.value = ''
      dateRef.current.value = ''
      hoursRef.current.value = ''
      minutesRef.current.value = ''
   }

   return (
      <div className='task-entry'>
         <div className='backdrop'></div>

         <div className='register-form'>
            <form onSubmit={submitEntryHandler}>
               <div className='register-title'>
                  <p className='header'>Insert Project</p>
                  <p className='subtitle'>
                     Please complete the the details below.
                  </p>
               </div>

               {setsuccessEntry && (
                  <div className='success'>
                     <img src={success} alt='' />
                     <p>Successfully added a new task!</p>
                  </div>
               )}

               <span>Select a Task</span>
               <select id='dropdown' className='dropdown' ref={titleRef}>
                  <option value='Front-End Task'>Front-End Task</option>
                  <option value='Back-End Task'>Back-End Task</option>
                  <option value='UI/UX Design Task'>UI/UX Task</option>
                  <option value='Graphic Design Task'>
                     Graphic Design Task
                  </option>
                  <option value='Bug Removal'>Bug Removal</option>
               </select>
               <span>Task Decription</span>
               <textarea
                  className='description'
                  ref={descriptionRef}
                  required
               />
               <span>Date of the Task</span>
               <input type='date' className='date' ref={dateRef} required />
               <span>Number of Hours</span>
               <input type='number' ref={hoursRef} required />
               <span>Number of Minutes</span>
               <input
                  type='number'
                  max='60'
                  min='0'
                  ref={minutesRef}
                  required
               />
               <div className='button-control'>
                  <button type='submit' className='submit'>
                     Submit
                  </button>
                  <button
                     type='button'
                     className='cancel'
                     onClick={hideModalHandler}
                  >
                     Close
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default TaskEntry
