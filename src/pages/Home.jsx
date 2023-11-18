import React from "react";
import Slider from "../components/Home/slider";
import MovieSection from "../components/Home/movieSection";
import UpcommingMovies from "../components/Home/upcommingMovies";
import { actionMovies } from "../utiles/movies";

function Home() {
  return (
    <>
      <section>
        <div className="flex h-full w-full flex-col gap-40">
          <Slider />
          <MovieSection
            idSection={"Action"}
            title={"Action & Adventure Movies"}
            data={actionMovies}
          />
          <MovieSection
            idSection={"Horror"}
            title={"Horror Movies"}
            data={actionMovies}
            direction={"r"}
          />
          <MovieSection
            idSection={"Comedy"}
            title={"Comedy Movies"}
            data={actionMovies}
          />
        </div>
      </section>
      <UpcommingMovies />
    </>
  );
}

export default Home;
