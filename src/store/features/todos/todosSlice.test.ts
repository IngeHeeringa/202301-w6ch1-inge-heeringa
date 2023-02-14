import {
  createTodoActionCreator,
  deleteTodoActionCreator,
  loadTodosActionCreator,
  todosReducer,
} from "./todosSlice";

const todos = [
  {
    id: 1,
    name: "Buy food",
    isDone: false,
  },
  {
    id: 2,
    name: "Clean kitchen",
    isDone: false,
  },
];
describe("Given a todosReducer function", () => {
  describe("When it receives a list of two todos 'Buy food' and 'Clean kitchen' and a loadTodos action", () => {
    test("Then it should return that same list of todos", () => {
      const expectedTodos = [
        {
          id: 1,
          name: "Buy food",
          isDone: false,
        },
        {
          id: 2,
          name: "Clean kitchen",
          isDone: false,
        },
      ];

      const loadTodosAction = loadTodosActionCreator(todos);

      const newTodos = todosReducer(todos, loadTodosAction);

      expect(newTodos).toStrictEqual(expectedTodos);
    });
  });

  describe("When it receives a list of two todos 'Buy food' and 'Clean kitchen' and a deleteTodo action with a payload of the id of 'Buy food", () => {
    test("Then it should return a list with only 'Clean kitchen'", () => {
      const expectedTodos = [
        {
          id: 2,
          name: "Clean kitchen",
          isDone: false,
        },
      ];

      const deleteTodoAction = deleteTodoActionCreator(1);

      const newTodos = todosReducer(todos, deleteTodoAction);

      expect(newTodos).toStrictEqual(expectedTodos);
    });
  });

  describe("When it receives a list of two todos 'Buy food' and 'Clean kitchen' and a createTodo action with a payload of a new todo 'Walk dogs'", () => {
    test("Then it should return a list with three todos 'Buy food', 'Clean kitchen' and 'Walk dogs'", () => {
      const newTodo = {
        id: 3,
        name: "Walk dogs",
        isDone: false,
      };

      const expectedTodos = [
        {
          id: 1,
          name: "Buy food",
          isDone: false,
        },
        {
          id: 2,
          name: "Clean kitchen",
          isDone: false,
        },
        {
          id: 3,
          name: "Walk dogs",
          isDone: false,
        },
      ];

      const createTodoAction = createTodoActionCreator(newTodo);

      const newTodos = todosReducer(todos, createTodoAction);

      expect(newTodos).toStrictEqual(expectedTodos);
    });
  });
});
