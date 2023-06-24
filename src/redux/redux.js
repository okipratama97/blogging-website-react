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
    logoutUser: (state) => {
      state.value = {} // Menghapus data pengguna saat logout
    },
  },
})

export const { setValue, logoutUser } = redux.actions
export default redux.reducer
