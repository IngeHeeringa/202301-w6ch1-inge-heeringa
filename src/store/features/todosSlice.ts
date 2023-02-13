import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosStructure } from "../../data/types";

const todosSlice = createSlice({
  name: "todos",
  initialState: [] as TodosStructure,
  reducers: {
    loadTodos: (
      state: TodosStructure,
      action: PayloadAction<TodosStructure>
    ) => [...action.payload],
  },
});

export default todosSlice;
export const { loadTodos: loadTodosActionCreator } = todosSlice.actions;
