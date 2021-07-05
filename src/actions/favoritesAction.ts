export const addFavorite = (payload: any) => {
  return {
    type: "ADD",
    payload,
  };
};

export const removeFavorite = (payload: any) => {
  return {
    type: "REMOVE",
    payload,
  };
};
