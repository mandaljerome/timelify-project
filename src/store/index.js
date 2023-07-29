import { configureStore } from '@reduxjs/toolkit'
import { account, regOverlay } from './registration'
import { auth } from './auth'

const store = configureStore({
   reducer: {
      registration: regOverlay.reducer,
      account: account.reducer,
      auth: auth.reducer,
   },
})

export default store
