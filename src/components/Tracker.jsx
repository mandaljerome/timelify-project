import React from 'react'
import './Tracker.scss'
import sunny from '../assets/sunny.png'
import play from '../assets/play.png'
import pause from '../assets/pause.png'
import stop from '../assets/stop.png'

const Tracker = () => {
   // This function is for adding entry
   // for specific task in the past the is
   // not recorded in the Tracker.
   const addTaskEntryHandler = () => {}

   return (
      <div className='tracker'>
         <div className='tracker-section'>
            <div className='counter-section'>
               <div className='date-header'>
                  <img src={sunny} alt='' className='weather' />
                  <div className='date-day'>
                     <p>July 26, 2023</p>
                     <p>Monday</p>
                  </div>
                  <p className='time'>
                     3:00 <span className='time-identifier'>PM</span>
                  </p>
               </div>
            </div>
            <div className='tracker-counter'>
               <i
                  className='fa-solid fa-plus'
                  onClick={addTaskEntryHandler}
               ></i>
               <div className='tracker-count'>
                  <div className='tracker-minutes'>
                     <h2>12</h2>
                     <p>minutes</p>
                  </div>
                  <div className='tracker-separator'>
                     <h2>:</h2>
                  </div>
                  <div className='tracker-seconds'>
                     <h2>00</h2>
                     <p>seconds</p>
                  </div>
               </div>
               <select
                  id='dropdown'
                  className='dropdown'
                  placeholder='Select a task to start'
               >
                  <option value='frontend'>Front-End Task</option>
                  <option value='backend'>Back-End Task</option>
               </select>

               <div className='buttons'>
                  <img src={play} alt='' className='play' />
                  <img src={stop} alt='' className='stop' />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Tracker
