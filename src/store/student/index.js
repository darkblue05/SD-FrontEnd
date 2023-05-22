import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@axios'

const URL_API = '/student'

export const fetchAllStudent = createAsyncThunk('student/fetchAll', async ({ id }) => {
  const response = await axios.get(`${URL_API}/${id}`)
  return response.data
})

export const fetchOne = createAsyncThunk('student/fetchOne', async ({ id }) => {
  const response = await axios.get(`${URL_API}/one/${id}`)
  return response.data
})

export const deleteOne = createAsyncThunk('student/deleteOne', async ({ id }) => {
  const response = await axios.delete(`${URL_API}/${id}`)
  return response.data
})

export const createOne = createAsyncThunk('student/createOne', async ({ id, data }) => {
  const response = await axios.post(`${URL_API}/${id}`, data)
  return response.data
})

export const studentSlicer = createSlice({
  name: 'student',
  initialState: {
    loading: false,
    rows: [],
    count: 0
  },
  reducers: {},
  extraReducers: builder => {
    // *** fetchAll

    builder.addCase(fetchAllStudent.pending, (state, action) => {
      state.loading = true
    })

    builder.addCase(fetchAllStudent.fulfilled, (state, action) => {
      state.loading = false
      state.rows = action.payload.data.rows || []
      state.count = action.payload.data.count || 0
    })

    builder.addCase(fetchAllStudent.rejected, (state, action) => {
      state.loading = false
    })
  }
})

export default studentSlicer.reducer
