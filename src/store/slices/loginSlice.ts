import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface LoginState {
  isLoggedIn: boolean,
  userId: string,
}

const initialState: LoginState = {
  isLoggedIn: false,
  userId: ''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    logoutSuccess: (state) => {
      state.isLoggedIn = false;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
  },
})

export const { loginSuccess, logoutSuccess, setUserId } = loginSlice.actions
export default loginSlice.reducer
