import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Todo } from "./todo";
import { getTodos } from "../redux/todoSlice";
export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  useEffect(() => {
    dispatch(getTodos('http://localhost:8000/api/v1'));
    
  }, [dispatch]);
  return (
    <ul>
      {todos.map((todo) => (
        <Todo title={todo.title} id={todo.id} key={todo.id} />
      ))}
    </ul>
  );
};
