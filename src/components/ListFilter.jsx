import React from 'react'
import './ListFilter.scss'

const ListFilter = () => {
   return (
      <div className='list-filter'>
         <div className='filter-header'>
            <select name='filter' id='filter' className='filter-dropdown'>
               <option value='today'>Today</option>
               <option value='all'>All</option>
               <option value='lastSeven'>Last 7 Days</option>
               <option value='lastMonth'>Last Month</option>
               <option value='search'>Search Date</option>
            </select>
            <div className='total-hours'>
               <p>Total Hours</p>
               <h3>3h 2m 0s</h3>
            </div>

            <div className='filter-date'>
               <div className='form-control'>
                  <label htmlFor='start'>Select Start Date</label>
                  <input
                     type='date'
                     name='start'
                     id='start'
                     placeholder='Start Date'
                  />
               </div>
               <div className='form-control'>
                  <label htmlFor='end'>Select End Date</label>
                  <input type='date' name='end' id='end' />
               </div>
               <button className='filter-button'>Filter</button>
            </div>
         </div>
      </div>
   )
}

export default ListFilter
