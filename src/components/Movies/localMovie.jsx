import React from "react";
import MovieId from "../widget/movieId";
import { useParams } from "react-router-dom";

function LocalMovie() {
  let params = useParams();
  return <div>{params.movieId}</div>;
}

export default LocalMovie;
