import React from "react";
import { upcommingMovies } from "../../utiles/movies";

function UpcommingMovies() {
  return (
    <div className="upcommingSection">
      <section className="flex flex-col items-center justify-center gap-16">
        <h1 className="title mt-10 text-center">Upcomming Movies</h1>
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {upcommingMovies.map((item) => {
            return (
              <div key={item.id} className="upcommingCard group">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 3fr",
                  }}
                  className="transitionTouch group-hover:opacity-84 
                 h-full w-full gap-10 rounded-sm bg-black group-hover:opacity-80"
                >
                  <div className="flex h-full w-full">
                    <img
                      src={item.srcImage}
                      className="h-full w-full rounded-sm object-cover align-middle"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center p-4">
                    <h1 className="mb-2 text-xl font-bold">{item.name}</h1>
                    <h2 className="mb-4 text-sm">{item.ReleaseDate}</h2>
                    <button className="actionButton">Watch Trailer</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default UpcommingMovies;
