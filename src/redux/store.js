import { configureStore } from '@reduxjs/toolkit'
import redux from './redux'

export const store = configureStore({
  reducer: {
    user: redux,
  },
})
