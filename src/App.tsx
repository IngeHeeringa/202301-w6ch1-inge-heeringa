import Form from "./components/Form/Form";
import Todos from "./components/Todos/Todos";

const App = (): JSX.Element => {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">Todo App</h1>
      </header>
      <Todos />
      <Form />
    </>
  );
};

export default App;
