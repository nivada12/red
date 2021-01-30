import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//REDUCERS
import { todoReducer } from "./reducers/todoReducers";

const reducer = combineReducers({
  todos: todoReducer,
});
const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
