import { combineReducers } from "redux";
import favoritesReducer from "./favorites";

const reducers = combineReducers({
  favorites: favoritesReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
