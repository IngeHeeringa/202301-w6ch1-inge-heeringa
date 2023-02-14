import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosStructure, TodoStructure } from "../../../data/types";

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as TodosStructure,
  reducers: {
    loadTodos: (
      currentTodos: TodosStructure,
      action: PayloadAction<TodosStructure>
    ) => [...action.payload],
    deleteTodo: (currentTodos: TodosStructure, action: PayloadAction<number>) =>
      currentTodos.filter((todo) => todo.id !== action.payload),
    createTodo: (
      currentTodos: TodosStructure,
      action: PayloadAction<TodoStructure>
    ) => [...currentTodos, action.payload],
  },
});

export const todosReducer = todosSlice.reducer;
export const {
  loadTodos: loadTodosActionCreator,
  deleteTodo: deleteTodoActionCreator,
  createTodo: createTodoActionCreator,
} = todosSlice.actions;
