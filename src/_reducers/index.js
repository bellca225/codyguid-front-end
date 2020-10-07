import { combineReducers } from "redux";
import member from "./user_reducer";
import posts from "./post_reducer";
import galleries from "./gallery_reducer";

const rootReducer = combineReducers({
  member,
  posts,
  galleries,
});

export default rootReducer;
