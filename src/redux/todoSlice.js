import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("todo/getTodos", async (url) => {
  return fetch(url).then((res) => res.json());
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    status: null,
  },
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;

      state.todos.push({
        id: Math.floor(Math.random() * 1000000),
        title: newTodo.title,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.status = "loading";
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      state.todos = payload;
    },
    [getTodos.rejected]: (state) => {
      state.status = "failed";
    },
  },
});
export const todoActions = todoSlice.actions;
