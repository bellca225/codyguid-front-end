import { combineReducers } from "redux";
import member from "./user_reducer";
import posts from "./post_reducer";
import galleries from "./gallery_reducer";
import position from "./search_reducer";
import weather from "./weather_reducer";

const rootReducer = combineReducers({
  member,
  posts,
  galleries,
  // position,
  weather,
});

export default rootReducer;
