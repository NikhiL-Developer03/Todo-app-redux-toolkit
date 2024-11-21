import "./App.css";
import Todos from "./compoenents/Todos";
import AddTodo from "./compoenents/AddTodo";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-white  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-lg shadow-lg">
        Todo App
      </h1>

      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
