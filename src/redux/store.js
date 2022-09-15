import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import AuthSlice from './slices/AuthSlice'

export default configureStore({
  reducer: {
    counter: counterSlice,
    auth: AuthSlice
  }
})