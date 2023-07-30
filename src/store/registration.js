import { createSlice } from '@reduxjs/toolkit'

//To actiave the Registration modal
const regOverLayState = {
   regShow: false,
}

export const regOverlay = createSlice({
   name: 'registration',
   initialState: regOverLayState,
   reducers: {
      open: (state) => {
         state.regShow = true
      },
      close: (state) => {
         state.regShow = false
      },
   },
})

// User Data
const accountState = JSON.parse(localStorage.getItem('user')) || []

export const account = createSlice({
   name: 'users',
   initialState: accountState,
   reducers: {
      newUser: (state, action) => {
         state.push(action.payload)

         localStorage.setItem('user', JSON.stringify(state))
      },
   },
})

export const regOverlayShow = regOverlay.actions

export const accountAction = account.actions
