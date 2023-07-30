import React from 'react'
import Date from './Date'

import './Tracker.scss'

import Counter from './Counter'

const Tracker = () => {
   return (
      <div className='tracker'>
         <div className='tracker-section'>
            <div className='counter-section'>
               <Date />
            </div>
            <Counter />
         </div>
      </div>
   )
}

export default Tracker
