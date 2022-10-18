import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import AuthSlice from './slices/AuthSlice'
import InterfaceSile from './slices/InterfaceSile'

export default configureStore({
  reducer: {
    counter: counterSlice,
    auth: AuthSlice, 
    interface: InterfaceSile
  }
})