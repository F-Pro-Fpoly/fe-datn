import { createSlice } from '@reduxjs/toolkit'

export const InterfaceSile = createSlice({
  name: 'interface',
  initialState: {
    loading: false
  },
  reducers: {
    setLoading: (state, action) =>{
        state.loading = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLoading } = InterfaceSile.actions

export default InterfaceSile.reducer