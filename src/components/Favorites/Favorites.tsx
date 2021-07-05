import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

export default function Favorites() {
  const favorites = useSelector((state: RootState) => state.favorites);

  useEffect(() => {}, []);
  return <div className="container">{JSON.stringify(favorites)}</div>;
}
