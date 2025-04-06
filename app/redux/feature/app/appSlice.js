import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  signupPayload: {},
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSignupPayload: (state, action) => {
      state.signupPayload = {...state.signupPayload, ...action.payload};
    },
  },
});

export const {setSignupPayload} = appSlice.actions;

export default appSlice.reducer;
