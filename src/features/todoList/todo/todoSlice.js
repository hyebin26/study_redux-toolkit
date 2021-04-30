import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    finishTodoList: [],
  },
  reducers: {
    addTodo(state, action) {
      const { id, todo } = action.payload;
      state.todoList.push({ id, todo });
    },
    deleteTodo(state, action) {
      const { id, type } = action.payload;
      const filterTodo = state[type].filter((todo) => todo.id !== id);
      state[type] = filterTodo;
    },
    finishTodoList(state, action) {
      const { id, content } = action.payload;
      state.finishTodoList.push({ id, todo: content });
      const filterTodo = state.todoList.filter((todo) => todo.id !== id);
      state.todoList = filterTodo;
    },
    notFinishTodoList(state, action) {
      const { id, content } = action.payload;
      state.todoList.push({ id, todo: content });
      const filterFinishTodo = state.finishTodoList.filter(
        (todo) => todo.id !== id
      );
      state.finishTodoList = filterFinishTodo;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  finishTodoList,
  notFinishTodoList,
} = todoSlice.actions;

export default todoSlice.reducer;
