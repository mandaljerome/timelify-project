import { createSlice } from '@reduxjs/toolkit'

const daysOfWeek = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
]

const monthsOfYear = [
   'January',
   'February',
   'March',
   'April',
   'May',
   'June',
   'July',
   'August',
   'September',
   'October',
   'November',
   'December',
]

const newDate = new Date()
const hoursNotConverted = newDate.getHours()
const hours = newDate.getHours() % 12 || 12
const minutes = newDate.getMinutes()
const seconds = newDate.getSeconds()
const meridiem = hoursNotConverted < 12 ? 'AM' : 'PM'

const dayNumber = newDate.getDay()
const dayOfMonth = newDate.getDate()
const currentDay = newDate[dayNumber]
const monthNumber = newDate.getMonth()
const year = newDate.getFullYear()
const monthWord = monthsOfYear[monthNumber]

const dateState = {
   hours,
   minutes,
   seconds,
   dayNumber,
   currentDay,
   monthNumber,
   year,
   monthWord,
   dayOfMonth,
   meridiem,
}

export const currentDate = createSlice({
   name: 'date',
   initialState: dateState,
   reducers: {
      interval: (state, action) => {
         state = action.payload
      },
   },
})

export const dateAction = currentDate.actions
