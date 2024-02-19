import React, { useEffect, useState } from "react";
import { BellIcon } from "@heroicons/react/24/solid";
import NavMenuItems from "./navMenuItems";
import Logo from "../../icons/webLogo/logo";
import { StarFilledIcon } from "@radix-ui/react-icons";
import socket from "./socketServer";
import DropMenuRadix from "../widget/dropMenu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { NavLink } from "react-router-dom";

function Navbar({ favourite }) {
  const [movieNotices, setMovieNotices] = useState([]);

  useEffect(() => {
    const handleNewMovie = (receivedMovie) => {
      setMovieNotices((prevMovieNotices) => [
        ...prevMovieNotices,
        receivedMovie,
      ]);
    };
    socket.on("movie", handleNewMovie);
    return () => {
      socket.off("movie", handleNewMovie);
    };
  }, []);
  console.log(favourite);
  return (
    <header>
      <section className="flex items-center">
        <div className="flex h-full w-full items-center justify-between">
          <Logo />
          <NavMenuItems favourite={favourite} />

          <div className="relative flex items-center justify-end">
            <DropMenuRadix
              trigger={
                <div
                  className="transitionTouch mr-4 rounded-full border
             border-gray11 hover:bg-grayA7 md:hidden"
                >
                  <StarFilledIcon className="h-6 w-6 cursor-pointer p-0.5" />
                </div>
              }
              childer={
                favourite.length > 0 ? (
                  favourite.map((item) => {
                    return (
                      <DropdownMenu.Item
                        key={item.identifier}
                        className="group relative select-none items-center
           rounded-[3px] p-2 text-sm leading-none text-red11 
           outline-none data-[disabled]:pointer-events-none
            data-[highlighted]:bg-red9 data-[disabled]:text-mauve11 data-[highlighted]:text-red1"
                      >
                        <NavLink
                          to={`/movies/${item.identifier}`}
                          className="inline-flex items-center gap-1"
                        >
                          <img
                            src={item.image}
                            className="h-8 w-8 object-contain"
                            alt={item.name}
                          />
                          <div className="flex flex-col gap-1">
                            <h1>{item.name}</h1>
                            <h1 className="text-[13px]">{item.type}</h1>
                          </div>
                        </NavLink>
                      </DropdownMenu.Item>
                    );
                  })
                ) : (
                  <div className="flex h-full w-full items-center justify-center p-[5px] text-red11">
                    <div className="px-4 py-2 text-sm">
                      There is no Movie yet!
                    </div>
                  </div>
                )
              }
            />

            <DropMenuRadix
              trigger={
                <div
                  className="transitionTouch
             cursor-pointer rounded-full border border-gray11 hover:bg-grayA7"
                >
                  <BellIcon className="h-6 w-6 p-0.5" />
                  {movieNotices.length > 0 && (
                    <div
                      className="absolute bottom-4 right-4 h-5 w-5 rounded-full 
              bg-red10 text-center text-sm "
                    >
                      {movieNotices.length}
                    </div>
                  )}
                </div>
              }
              childer={
                movieNotices.length > 0 ? (
                  movieNotices.map((item) => {
                    return (
                      <DropdownMenu.Item
                        key={item.id}
                        className="group relative select-none items-center
           rounded-[3px] p-2 text-sm leading-none text-red11 
           outline-none data-[disabled]:pointer-events-none
            data-[highlighted]:bg-red9 data-[disabled]:text-mauve11 data-[highlighted]:text-red1"
                      >
                        <div className="inline-flex items-center gap-1">
                          <img
                            src={require(
                              `../../images/upcomming/${item.imageSrc}.jpeg`,
                            )}
                            className="h-8 w-8 object-contain"
                            alt="movie"
                          />
                          <div className="flex">
                            <h1>{item.title}</h1>
                          </div>
                        </div>
                      </DropdownMenu.Item>
                    );
                  })
                ) : (
                  <div className="flex h-full w-full items-center justify-center p-[5px] text-red11">
                    <div className="px-4 py-2 text-sm">
                      There is no Movie yet!
                    </div>
                  </div>
                )
              }
            />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
