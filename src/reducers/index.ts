import { combineReducers } from "redux";
import favoritesReducer from "./favorites";
import commentsReducer from "./comments";

const reducers = combineReducers({
  favorites: favoritesReducer,
  comments: commentsReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
