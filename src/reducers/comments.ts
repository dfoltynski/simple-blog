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
  commentId?: number;
}

const commentsReducer = (state: IComment[] = [], action: IAction) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return Array.from(new Set([...state, action.payload]));
    case "REMOVE_COMMENT":
      const commentToRemove = state
        .map((comment) => {
          return comment.name;
        })
        .indexOf(action.payload.name);
      state.splice(commentToRemove, 1);
      return state;
    default:
      return state;
  }
};

export default commentsReducer;
