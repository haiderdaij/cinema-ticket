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
            title={"Action & Adventure Movies"}
            data={actionMovies}
            cardColor={"bg-rubyA3"}
          />
          <MovieSection
            title={"Horror Movies"}
            data={actionMovies}
            cardColor={"bg-indigoA3"}
            direction={"r"}
          />
          <MovieSection
            title={"Comedy Movies"}
            data={actionMovies}
            cardColor={"bg-grayA3"}
          />
        </div>
      </section>
      <UpcommingMovies />
    </>
  );
}

export default Home;
