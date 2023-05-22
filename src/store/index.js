import { configureStore } from '@reduxjs/toolkit'

import auth from './auth/index'
import userClass from './class'
import student from './student'

export const store = configureStore({
  reducer: {
    auth,
    userClass,
    student
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
