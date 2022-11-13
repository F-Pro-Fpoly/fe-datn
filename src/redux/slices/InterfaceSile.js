import { createSlice } from '@reduxjs/toolkit'

export const InterfaceSile = createSlice({
  name: 'interface',
  initialState: {
    loading: false,
    navb : false
  },
  reducers: {
    setLoading: (state, action) =>{
        state.loading = action.payload
    },
    setNavb: (state, action) =>{
      state.navb = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setLoading, setNavb } = InterfaceSile.actions

export default InterfaceSile.reducer