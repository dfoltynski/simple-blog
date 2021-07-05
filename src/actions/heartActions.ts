export const activateHeart = (payload: any) => {
  return {
    type: "ADD",
    payload,
  };
};

export const deactivateHeart = (payload: any) => {
  return {
    type: "REMOVE",
    payload,
  };
};
