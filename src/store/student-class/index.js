import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@axios'

const URL_API = '/student-class'

export const fetchAllClass = createAsyncThunk('student-class/fetchAll', async ({ id }) => {
  const response = await axios.get(`${URL_API}/${id}`)
  return response.data
})

export const fetchOne = createAsyncThunk('studen-class/fetchOne', async ({ id }) => {
  const response = await axios.get(`${URL_API}/one/${id}`)
  return response.data
})

export const deleteOne = createAsyncThunk('student-class/deleteOne', async ({ id }) => {
  const response = await axios.delete(`${URL_API}/${id}`)
  return response.data
})

export const createOne = createAsyncThunk('student-class/createOne', async ({ id, data }) => {
  const response = await axios.post(`${URL_API}/${id}`, data)
  return response.data
})

export const classSlicer = createSlice({
  name: 'class',
  initialState: {
    loading: false,
    rows: [],
    count: 0
  },
  reducers: {},
  extraReducers: builder => {
    // *** fetchAll

    builder.addCase(fetchAllClass.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(fetchAllClass.fulfilled, (state, action) => {
      state.loading = false
      state.rows = action.payload.data.rows || []
      state.count = action.payload.data.count || 0
    })

    builder.addCase(fetchAllClass.rejected, (state, action) => {
      state.loading = false
    })
  }
})

export default classSlicer.reducer
