import Task from "./components/Task/Task";

const todo = { id: 1, name: "pet cats", isDone: false };
const App = () => {
  return <Task todo={todo} />;
};

export default App;
