import { useSelector } from "react-redux";
export const Navbar = () => {
  const todos = useSelector((state) => state.todo.todos.length);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
      <div className="container-fluid">
        <a className="navbar-brand position-relative mt-2" href="#">
          TodoList
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            {todos >= 1 && todos}
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};
