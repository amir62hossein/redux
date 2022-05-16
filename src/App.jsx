import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "./redux/todoSlice";
import { Navbar } from "./components/Nav";
import { TodoList } from "./components/todoList";
import { AiOutlinePlus } from "react-icons/ai";
import axios from 'axios'

function App() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const addTodo = () => {
    dispatch(todoActions.addTodo({ title: value }));

    setValue("");
  };

  

  
 

  return (
    <div className={`container`}>
      <Navbar />
      <h1 className="text-center">Redux Todo App</h1>
      <div className="col-md-8 mx-auto d-flex flex-row p-3">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="form-control w-75"
        />
        <button onClick={addTodo} className="btn btn-success mx-3">
          <AiOutlinePlus />
        </button>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
