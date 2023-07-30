import React, { useRef } from 'react'
import './ListFilter.scss'
import { filterAction } from '../store/task'
import { useDispatch, useSelector } from 'react-redux'

const ListFilter = () => {
   const startRef = useRef()
   const endRef = useRef()
   const dispatch = useDispatch()
   const totalTime = useSelector((state) => state.filter.totalSec)
   const activateSearchFilter = useSelector(
      (state) => state.filter.searchActivate
   )

   //Time Formatter for the total time
   const hours = Math.floor(totalTime / 3600)
   const remainingSecondsAfterHours = totalTime % 3600
   const minutes = Math.floor(remainingSecondsAfterHours / 60)
   const seconds = remainingSecondsAfterHours % 60

   // This set the filter data in the item list
   const searchFilterHandler = (e) => {
      const value = e.target.value
      dispatch(filterAction.filterHandler(value))
   }

   const submitHandler = (e) => {
      e.preventDefault()
      dispatch(
         filterAction.submitFilter({
            start: startRef.current.value,
            end: endRef.current.value,
         })
      )
   }

   return (
      <div className='list-filter'>
         <div className='filter-header'>
            <select
               name='filter'
               id='filter'
               className='filter-dropdown'
               onChange={searchFilterHandler}
            >
               <option value='all'>All</option>
               <option value='today'>Today</option>
               <option value='sevenDays'>Last 7 Days</option>
            </select>
            <div className='total-hours'>
               <p>Total Hours</p>
               <h3>
                  {hours}h {minutes}m {seconds}s
               </h3>
            </div>

            {activateSearchFilter && (
               <form className='filter-date' onSubmit={submitHandler}>
                  <div className='form-control'>
                     <label htmlFor='start'>Select Start Date</label>
                     <input
                        type='date'
                        name='start'
                        id='start'
                        ref={startRef}
                        required
                     />
                  </div>
                  <div className='form-control'>
                     <label htmlFor='end'>Select End Date</label>
                     <input
                        type='date'
                        name='end'
                        id='end'
                        ref={endRef}
                        required
                     />
                  </div>
                  <button type='submit' className='filter-button'>
                     Filter
                  </button>
               </form>
            )}
         </div>
      </div>
   )
}

export default ListFilter
