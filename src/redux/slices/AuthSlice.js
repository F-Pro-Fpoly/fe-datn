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
  }
})

// Action creators are generated for each case reducer function
export const { addUser } = AuthSlice.actions

export default AuthSlice.reducer