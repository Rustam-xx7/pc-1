import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1 , text: 'Learn Redux Toolkit' , completed: false}]
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({id: nanoid(), text: action.payload, completed: false});
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
})

export const {addTodo , removeTodo} = todoSlice.actions; // individually exporting the actions so that we can use them in our components

export default todoSlice.reducer; // to give awarness to the store about the reducer