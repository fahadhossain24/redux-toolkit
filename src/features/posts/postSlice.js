import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPost = createAsyncThunk('postSlice/fetchPost', async() => {
    const respons = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return respons.data
})


export const postSlice = createSlice({
    name: 'postSlice',
    initialState: {
        posts: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPost.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.posts = action.payload
            state.isLoading = false
            state.error = null
        })
        builder.addCase(fetchPost.rejected, (state, action) => {
            state.posts = []
            state.isLoading = false
            state.error = action.error.message
        })
    }
})

export default postSlice.reducer;