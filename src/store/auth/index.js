import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@axios'

const URL_API = '/auth'

export const setRegister = createAsyncThunk('auth/setRegister', async ({ data }) => {
  const response = await axios.post(`${URL_API}/register`, data)
  return response.data
})

export const getLogin = createAsyncThunk('auth/getLogin', async ({ data }) => {
  const response = await axios.post(`${URL_API}/login`)
  return response.data
})

export const authSlicer = createSlice({
  name: 'auth',
  initialState: {
    loading: false
  },
  reducers: {},
  extraReducers: builder => {
    // *** fetchAll

    builder.addCase(setRegister.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(setRegister.fulfilled, (state, action) => {
      state.loading = false
    })

    builder.addCase(setRegister.rejected, (state, action) => {
      state.loading = false
    })
  }
})

export default authSlicer.reducer
