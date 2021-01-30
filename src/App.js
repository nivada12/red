import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  AddTodo,
  RemoveTodo,
  UpdateTodo,
  Up,
} from "./redux/actions/todoActions";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const st = useSelector((state) => state.todos);

  const { todos, counter } = st;
  return (
    <div className="mt-5">
      <div className="card">
        <p> so lets test it out .. {counter}</p>

        <input
          placeholder="want add / modify item ?"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(Up());
          }}
        >
          counteur
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            input === ""
              ? alert("IS EMPTY")
              : dispatch(AddTodo({ id: Math.random(100), task: input }));
          }}
        >
          add
        </button>
        {todos.map((x, index) => {
          return (
            <div className="todo" key={x.id}>
              <h3>item: {x.task}</h3>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(RemoveTodo(x.id));
                }}
              >
                remove
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (input === "") alert("IS EMPTY");
                  dispatch(UpdateTodo(index, input));
                }}
              >
                update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
