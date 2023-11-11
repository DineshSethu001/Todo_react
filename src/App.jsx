import { useState } from "react";
import InputBox from "./components/InputBox";
import ListContainer from "./components/ListContainer";
import "./style.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <InputBox todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <ListContainer list={todos} remove={deleteTodo} />
    </div>
  );
};

export default App;