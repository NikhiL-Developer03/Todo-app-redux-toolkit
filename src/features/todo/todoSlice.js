import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{id:1,text:"Hello World"}],
};
   

export const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    addTodo: (state,action) => {
      const todo = {
        id:nanoid(),
        text: action.payload
      }
      state.todos.push(todo )
    },
    removeTodo: (state,action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  }
})

// update todo using this reducer in components
export const {addTodo,removeTodo} = todoSlice.actions

//this export is also know by the store (store.js).beacuse it's a restricted store it can be update value by reducer only 
export default todoSlice.reducer
