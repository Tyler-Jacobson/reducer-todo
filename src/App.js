import React, { useState, useReducer } from "react";
import "./App.css";

import { initialState, reducer} from './appReducer'


function App() {
  const [todoListState, dispatch] = useReducer(reducer, initialState);

  const [todoItem, setTodoItem] = useState("");

  const handleChanges = (e) => {
    setTodoItem(e.target.value);
  };

  return (
    <div className="App">
      <h1>Tasks</h1>
      <div>
        <input
          type="text"
          name="todoItem"
          value={todoItem}
          onChange={handleChanges}
        />
        <button
          onClick={() => dispatch({ type: "ADD_TODO", payload: todoItem })}
        >
          Submit
        </button>
        {todoListState.toDo.map((item) => {
          return (
            <div>
              <p
                onClick={() =>
                  dispatch({ type: "CROSSOUT_TODO", payload: item.id })
                }
              >
                {item.complete ? (
                  <p className="strike">{item.task}</p>
                ) : (
                  item.task
                )}
              </p>
            </div>
          );
        })}
        <br />
        <button
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
        >Clear Completed</button>
      </div>
    </div>
  );
}

export default App;
