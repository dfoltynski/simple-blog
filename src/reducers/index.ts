import { combineReducers } from "redux";
import favoritesReducer from "./favorites";
import heartsReducer from "./hearts";

const reducers = combineReducers({
  favorites: favoritesReducer,
  hearts: heartsReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
