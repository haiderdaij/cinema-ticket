import React from "react";
import { IframeContainer } from "../../../widget/iframe";
import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { props } from "../../../../utiles/property";

function MovieDetails({ selectedMovie, favourite, setFavourite }) {
  return (
    <div className="m-auto mt-subSection h-full w-full max-w-screen-2xl px-6">
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
          onClick={() => {
            let updateFavourite;

            if (props.isAcceptIdentifier(favourite, selectedMovie.id)) {
              updateFavourite = favourite.filter(
                (favourite) => favourite.identifier !== selectedMovie.id,
              );
            } else {
              updateFavourite = [
                ...favourite,
                {
                  identifier: selectedMovie.id,
                  name: selectedMovie.name,
                  type: selectedMovie.type,
                  image: selectedMovie.srcImage,
                },
              ];
            }
            setFavourite(updateFavourite);
          }}
          className="transitionTouch inline-flex cursor-pointer
         items-center gap-1 rounded-sm border border-grayA8 p-1.5
          text-sm lg:hover:bg-grayA4"
        >
          {props.isAcceptIdentifier(favourite, selectedMovie.id) ? (
            <>
              <h2>remove</h2>
              <StarFilledIcon className="h-5 w-5 text-amber10" />
            </>
          ) : (
            <>
              <h2>Add</h2>
              <StarIcon className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
      <div
        className="transitionTouch m-auto mb-section
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
              return (
                <li key={item.name} className="gridCardSubtitle">
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="gridCardetails">
          <h1 className="gridCardTitle">Writers</h1>
          <ul className="list-disc pl-4">
            {selectedMovie.writers.map((item) => {
              return (
                <li key={item.name} className="gridCardSubtitle">
                  {item.name}
                </li>
              );
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

export default MovieDetails;
