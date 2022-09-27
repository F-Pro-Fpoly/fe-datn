import { createSlice } from '@reduxjs/toolkit'

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: sessionStorage['user'] ? JSON.parse(sessionStorage['user']) : null,
    token: sessionStorage['token'] ?? null
  },
  reducers: {
    addUser: (state, action) => {
        // console.log(action.payload);
      state.user = action.payload.user;
      state.token = action.payload.token;

      sessionStorage['user'] = JSON.stringify(action.payload.user);
      sessionStorage['token'] = action.payload.token;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;

      sessionStorage.removeItem('user')
      sessionStorage.removeItem('token')
    }
  }
})

// Action creators are generated for each case reducer function
export const { addUser, logout } = AuthSlice.actions

export default AuthSlice.reducer