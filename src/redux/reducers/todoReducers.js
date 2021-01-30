export const todoReducer = (
  state = {
    todos: [
      { id: 1, task: "sleeping" },
      { id: 2, task: "eating" },
    ],
    counter: 1,
  },
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,

        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      const lst = state.todos.filter((x) => x.id !== action.payload);
      return {
        ...state,

        todos: lst,
      };
    case "UPDATE_TODO":
      const l = state.todos;
      l[action.payload].task = action.item;
      return {
        ...state,

        todos: l,
      };
    case "UP":
      return {
        ...state,
        counter: state.counter + 1,
      };

    default:
      return state;
  }
};
