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
const accountState = [
   {
      name: 'Jerome Mandal',
      username: 'admin',
      password: 'admin',
   },
]

export const account = createSlice({
   name: 'users',
   initialState: accountState,
   reducers: {
      newUser: (state, action) => {
         state.push(action.payload)
      },
   },
})

export const regOverlayShow = regOverlay.actions

export const accountAction = account.actions
