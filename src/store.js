import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/posts/postSlice";
import todoReducer from "./features/todos/todoSlice";


const store = configureStore({
    reducer: {
        posts : postReducer,
        todos : todoReducer
    }
})

export default store;