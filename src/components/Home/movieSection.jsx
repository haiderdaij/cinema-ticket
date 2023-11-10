import React from "react";
import MovieIcon from "../../icons/movie.svg";
import TimeIcon from "../../icons/time-outline.svg";

function MovieSection({ title, data, direction, cardColor }) {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-16">
      <div className={`${direction === "r" ? "text-right" : ""}`}>
        <h1 className="title">{title}</h1>
      </div>
      <div
        className={`${
          direction === "r" ? "mr-auto" : "ml-auto"
        } flex w-full columns-3 gap-6 overflow-hidden lg:w-[70%]`}
      >
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={`${cardColor} group relative flex
               h-full w-full cursor-pointer flex-col
                justify-center gap-2 rounded-sm`}
            >
              <div className="relative flex h-full w-full">
                <img
                  src={item.srcImage}
                  className="h-full w-full"
                  alt={item.name}
                />
                <div className="bg-amber8 absolute left-0 top-0 rounded-sm p-1 text-black lg:p-2">
                  <h1 className="text-sm font-bold">{item.rate}</h1>
                </div>
              </div>
              <div className="flex h-full w-full flex-col gap-2 px-2 pb-2 text-lg">
                <div className="inline-flex items-center gap-1">
                  <img src={MovieIcon} alt="MovieIcon" />
                  <h1 className="font-bold">{item.name}</h1>
                </div>
                <div className="inline-flex items-center gap-1">
                  <img src={TimeIcon} alt="TimeIcon" />
                  <h1 className="font-bold">{item.time}</h1>
                </div>
              </div>
              <div
                className="invisible absolute flex h-full
               w-full flex-col items-center justify-center
                gap-2 bg-black/60 transition-all duration-75 ease-linear group-hover:visible"
              >
                <button className="actionButton text-lg">Buy Ticket</button>
                <button className="actionButton text-lg">Watch Trailer</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieSection;
