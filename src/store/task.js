import { createSlice } from '@reduxjs/toolkit'

export let filterDate = []

// this store if for showing the entry modal
const entryModalState = {
   showModal: false,
}

export const entryModal = createSlice({
   name: 'entryModal',
   initialState: entryModalState,
   reducers: {
      show: (state) => {
         state.showModal = true
      },
      hide: (state) => {
         state.showModal = false
      },
   },
})

// for triggering the filter data
const filterState = {
   filterData: 'all',
   totalSec: 0,
}

export const filter = createSlice({
   name: 'filter',
   initialState: filterState,
   reducers: {
      filterHandler: (state, action) => {
         state.filterData = action.payload
      },
      totalTimeHandler: (state, action) => {
         state.totalSec = action.payload
      },
   },
})

// this handle the data from the task
const taskState = JSON.parse(localStorage.getItem('data')) || []

export const task = createSlice({
   name: 'task',
   initialState: taskState,
   reducers: {
      addNewTask: (state, action) => {
         const minutesToSeconds = action.payload.minutes * 60
         const hourToSeconds = action.payload.hours * 60 * 60
         const totalSeconds = minutesToSeconds + hourToSeconds

         let icon

         // This statements are for logo placement only.
         if (action.payload.title === 'Graphic Design Task') {
            icon = 1
         }
         if (action.payload.title === 'Front-End Task') {
            icon = 2
         }
         if (action.payload.title === 'Back-End Task') {
            icon = 3
         }
         if (action.payload.title === 'Bug Removal') {
            icon = 4
         }
         if (action.payload.title === 'UI/UX Design Task') {
            icon = 5
         }

         state.push({
            id: Math.random(),
            title: action.payload.title,
            description: action.payload.description,
            numberSeconds:
               action.payload.numberSeconds === undefined
                  ? totalSeconds
                  : action.payload.numberSeconds,
            date: action.payload.date,
            time:
               action.payload.time === undefined
                  ? 'Entry Only'
                  : action.payload.time,
            icon: icon,
         })

         localStorage.setItem('data', JSON.stringify(state))
      },
   },
})

export const taskAction = task.actions
export const entryModalAction = entryModal.actions
export const filterAction = filter.actions
