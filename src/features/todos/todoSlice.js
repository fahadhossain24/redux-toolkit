import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: {
        todos : [],
    },
    reducers: {
        addTodo: (state, action) => {
            return {
                todos: [...state.todos, action.payload]
            }
        }
    }
});

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer