import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { userLoginReducer } from "./userReducer";

const reducers = combineReducers({
  posts: postReducer,
  user: userLoginReducer,
});

export default reducers;
