export const AddTodo = (todo) => (dispatch) => {
  dispatch({
    type: "ADD_TODO",
    payload: todo,
  });
};
export const RemoveTodo = (id) => (dispatch) => {
  dispatch({
    type: "REMOVE_TODO",
    payload: id,
  });
};
export const UpdateTodo = (index, item) => (dispatch) => {
  dispatch({
    type: "UPDATE_TODO",
    payload: index,
    item: item,
  });
};
export const Up = () => (dispatch) => {
  dispatch({
    type: "UP",
  });
};
