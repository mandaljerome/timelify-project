import React from 'react'
import './ListItem.scss'
import timeLogo from '../assets/time-logo.svg'

import icon1 from '../assets/icon1.svg'
import icon2 from '../assets/icon2.svg'
import icon3 from '../assets/icon3.svg'
import icon4 from '../assets/icon4.svg'
import icon5 from '../assets/icon5.svg'

const ListItem = (props) => {
   //Time calculation of the total time of all filtered data.
   const hours = Math.floor(props.numberSeconds / 3600)
   const remainingSecondsAfterHours = props.numberSeconds % 3600
   const minutes = Math.floor(remainingSecondsAfterHours / 60)
   const seconds = remainingSecondsAfterHours % 60

   // For the icon purposes only.
   let icon
   if (props.icon === 1) {
      icon = <img src={icon1} alt='' className='icon' />
   }
   if (props.icon === 2) {
      icon = <img src={icon2} alt='' className='icon' />
   }
   if (props.icon === 3) {
      icon = <img src={icon3} alt='' className='icon' />
   }
   if (props.icon === 4) {
      icon = <img src={icon4} alt='' className='icon' />
   }
   if (props.icon === 5) {
      icon = <img src={icon5} alt='' className='icon' />
   }

   return (
      <div className='list-item'>
         <div className='item-task'>
            {/* <img src={icon} alt='' className='icon' /> */}
            {icon}
            <div className='task-details'>
               <h2 className='title'>{props.title}</h2>
               <p className='time'>
                  {props.date} | {props.time}
               </p>
            </div>
            <div className='task-description'>
               <p>{props.description}</p>
            </div>
            <div className='task-time'>
               <img src={timeLogo} alt='' />
               <span className='number-time'>
                  {hours}h {minutes}m {seconds}s
               </span>
            </div>
         </div>
      </div>
   )
}

export default ListItem
