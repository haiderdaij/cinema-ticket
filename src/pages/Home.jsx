import React from "react";
import Slider from "../components/Home/slider";
import MovieSection from "../components/Home/movieSection";
import UpcommingMovies from "../components/Home/upcommingMovies";
import { actionMovies, comedyMovies, horrorMovies } from "../utiles/movies";

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
            data={horrorMovies}
            direction={"r"}
          />
          <MovieSection
            idSection={"Comedy"}
            title={"Comedy Movies"}
            data={comedyMovies}
          />
        </div>
      </section>
      <UpcommingMovies />
    </>
  );
}

export default Home;
