import React from "react";
import { useParams } from "react-router-dom";
import { actionMovies } from "../../../utiles/movies";
import { IframeContainer } from "../../widget/iframe";

function LocalMovie({ Error }) {
  let params = useParams()?.newid;
  const selectedMovie = actionMovies.find((movie) => movie.id === params);
  if (!selectedMovie) {
    return Error;
  }

  return (
    <div className="mb-40 mt-subSection h-full w-full">
      <div className="mb-5 flex items-start justify-between">
        <div className="flex flex-col items-start justify-start gap-2 text-left">
          <h1 className="text-3xl font-bold lg:text-5xl">
            {selectedMovie.name}
          </h1>
          <div>
            <h2 className="text-sm text-grayA11">{selectedMovie.type}</h2>
            <h2 className="text-sm text-grayA11">{selectedMovie.time}</h2>
          </div>
        </div>
        <button
          className="transitionTouch inline-flex cursor-pointer
         items-center gap-1 rounded-sm border border-grayA8 p-1.5
          text-sm lg:hover:bg-grayA4"
        >
          <h2>Add favourite</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
        </button>
      </div>
      <div
        className="transitionTouch m-auto mb-20
       h-[60vh] max-h-[85vh] w-[90vw]
        max-w-[1000px] rounded-md border border-grayA6"
      >
        <IframeContainer link={selectedMovie.trailerLink} />
      </div>
      <div className="gridCardetails mb-5 bg-indigoA2 lg:hover:bg-indigoA2">
        <h1 className="gridCardTitle">Description</h1>
        <h2 className="gridCardSubtitle">{selectedMovie.description}</h2>
      </div>
      <div className="transitionTouch grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="gridCardetails">
          <h1 className="gridCardTitle">Cast</h1>
          <ul className="list-disc pl-4">
            {selectedMovie.cast.map((item) => {
              return <li className="gridCardSubtitle">{item.name}</li>;
            })}
          </ul>
        </div>
        <div className="gridCardetails">
          <h1 className="gridCardTitle">Writers</h1>
          <ul className="list-disc pl-4">
            {selectedMovie.writers.map((item) => {
              return <li className="gridCardSubtitle">{item.name}</li>;
            })}
          </ul>
        </div>
        <div className="gridCardetails">
          <h1 className="gridCardTitle">Director</h1>
          <h2 className="gridCardSubtitle">{selectedMovie.director}</h2>
        </div>
      </div>
    </div>
  );
}

export default LocalMovie;
