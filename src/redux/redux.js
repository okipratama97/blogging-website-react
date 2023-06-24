import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: {},
}

const redux = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setValue } = redux.actions
export default redux.reducer
