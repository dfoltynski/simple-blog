interface IComment {
  body: string;
  email: string;
  id: number;
  name?: string;
  postId?: number;
}

export const addComment = (payload: IComment) => {
  return {
    type: "ADD_COMMENT",
    payload,
  };
};
