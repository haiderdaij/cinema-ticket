import React from "react";
import IframeModel from "../widget/iframe";
import { NavLink } from "react-router-dom";

function MovieSection({ title, data, direction, cardColor, idSection }) {
  return (
    <div id={idSection} className="h-full w-full">
      <div className={`${direction === "r" ? "text-right" : ""}`}>
        <h1 className="title">{title}</h1>
      </div>
      <div
        className={`${
          direction === "r" ? "mr-auto" : "ml-auto"
        }  mt-16 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:w-[70%] lg:grid-cols-3`}
      >
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="group grid h-auto w-full cursor-pointer rounded-sm border border-amber12 bg-grayA3"
            >
              <div className="relative h-full w-full">
                <div className="m-auto flex h-[90%] w-[90%]">
                  <img
                    src={item.srcImage}
                    className="h-full w-full object-contain"
                    alt={item.name}
                  />
                </div>
                <div className="absolute left-0 top-0 w-9 rounded-sm bg-amber7 p-1 text-center text-black lg:p-2">
                  <h1 className=" text-sm font-bold">{item.rate}</h1>
                </div>
              </div>
              <div className="flex flex-col items-center justify-end gap-2 px-3 pb-4 lg:flex-row">
                <NavLink
                  target="_blank"
                  rel="noreferrer"
                  to={`/movies/${item.id}`}
                  className="actionButton w-[50%] border border-grayA12 bg-transparent text-grayA12 hover:bg-amber-950"
                >
                  Buy Ticket
                </NavLink>
                <IframeModel
                  link={item.trailerLink}
                  buttonStyle={"bg-grayA12 w-[50%]"}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieSection;
