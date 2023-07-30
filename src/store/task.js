import { createSlice } from '@reduxjs/toolkit'

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

const taskState = [
   {
      id: 1,
      title: 'Front-End Task',
      description: 'Created a log in for to the home page',
      numberSeconds: 3600,
      date: '2023-07-23',
      time: '4:00pm',
      icon: 2,
   },
]

export const task = createSlice({
   name: 'task',
   initialState: taskState,
   reducers: {
      addNewTask: (state, action) => {
         console.log(action.payload)

         const arrLength = state.length
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
            numberSeconds: totalSeconds,
            date: action.payload.date,
            time:
               action.payload.time === undefined
                  ? 'Entry Only'
                  : action.payload.time,
            icon: icon,
         })
      },
   },
})

export const taskAction = task.actions
export const entryModalAction = entryModal.actions
