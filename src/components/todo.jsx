import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { todoActions } from "../redux/todoSlice";
export const Todo = ({ title, id }) => {
  const dispatch = useDispatch();
  const removeTodo = (id) => {
    dispatch(todoActions.removeTodo(id));
  };
  return (
    <div className="card my-3 col-md-6 mx-auto d-flex flex-row">
      <div className="card-body">{title}</div>
      <TiDeleteOutline
        onClick={() => removeTodo(id)}
        color="red"
        size={`3em`}
      />
    </div>
  );
};
