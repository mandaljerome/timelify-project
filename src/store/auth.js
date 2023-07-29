import { createSlice } from '@reduxjs/toolkit'

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
   },
})

export const authAction = auth.actions
