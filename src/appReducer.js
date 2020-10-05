export const initialState = {
    toDo: [{ task: "starting task", complete: false, id: 0 }],
  };

export const reducer = (state, action) => {
    // const newTask = {task: action.payload, complete: false}
    // const reverseComplete = {complete: !state.complete}
  
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          toDo: [
            ...state.toDo,
            { task: action.payload, complete: false, id: Date.now() },
          ],
        };
      case "CROSSOUT_TODO":
        const newArr = state.toDo.map((iter) => {
          if (action.payload === iter.id) {
            return { ...iter, complete: !iter.complete };
          }
          return iter;
        });
        return {
          ...state,
          toDo: newArr,
        };
      case "CLEAR_COMPLETED":
        const incomplete = state.toDo.filter(iter => {
          return iter.complete === false
          }
        )
        return {
          ...state,
          toDo: incomplete
        }
  
      default:
        return state;
    }
  };
  