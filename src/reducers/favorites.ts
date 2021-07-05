interface IAction {
  type: string;
  payload: never;
}

const favoritesReducer = (state = [], action: IAction) => {
  switch (action.type) {
    case "ADD":
      return Array.from(new Set([...state, action.payload]));
    case "REMOVE":
      state.splice(state.indexOf(action.payload), 1);
      return state;
    default:
      return state;
  }
};

export default favoritesReducer;
