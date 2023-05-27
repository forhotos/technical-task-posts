import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import toastReducer from "./toastReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
   posts: postsReducer,
   users: usersReducer,
   toast: toastReducer
});

export default rootReducer;