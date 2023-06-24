import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = { ...state.value, ...action.payload }
    },
  },
})

export const { setValue } = user.actions
export default user.reducer
