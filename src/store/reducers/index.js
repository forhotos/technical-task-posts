import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
   posts: postsReducer,
   users: usersReducer
});

export default rootReducer;