interface IAction {
  type: string;
  payload: IComment;
}

interface IComment {
  body: string;
  email: string;
  id: number;
  name?: string;
  postId?: number;
}

const commentsReducer = (state: IComment[] = [], action: IAction) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return Array.from(new Set([...state, action.payload]));
    default:
      return state;
  }
};

export default commentsReducer;
