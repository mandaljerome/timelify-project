import { createSlice } from '@reduxjs/toolkit'

// the simple authentication from the login page to the dashboard

const authState = {
   authLogin: false,
   authError: false,
}

export const auth = createSlice({
   name: 'auth',
   initialState: authState,
   reducers: {
      login: (state) => {
         state.authLogin = true
      },
      logout: (state) => {
         state.authLogin = false
      },
      error: (state) => {
         state.authError = true
      },
      removeError: (state) => {
         state.authError = false
      },
   },
})

export const authAction = auth.actions
