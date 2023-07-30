import { configureStore } from '@reduxjs/toolkit'
import { account, regOverlay } from './registration'
import { auth } from './auth'
import { currentDate } from './date'
import { entryModal, task } from './task'

const store = configureStore({
   reducer: {
      registration: regOverlay.reducer,
      account: account.reducer,
      auth: auth.reducer,
      currentDate: currentDate.reducer,
      entryModal: entryModal.reducer,
      task: task.reducer,
   },
})

export default store
