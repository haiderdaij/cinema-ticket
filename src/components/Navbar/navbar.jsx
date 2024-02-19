import React, { useEffect, useState } from "react";
import { BellIcon } from "@heroicons/react/24/solid";
import NavMenuItems from "./navMenuItems";
import Logo from "../../icons/webLogo/logo";
import { StarFilledIcon } from "@radix-ui/react-icons";
import socket from "./socketServer";
import DropMenuRadix from "../widget/dropMenu";

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
  console.log(movieNotices);
  return (
    <header>
      <section className="flex items-center">
        <div className="flex h-full w-full items-center justify-between">
          <Logo />
          <NavMenuItems favourite={favourite} />

          <div className="relative flex items-center justify-end">
            <div
              className="transitionTouch mr-4 rounded-full border
             border-gray11 hover:bg-grayA7 md:hidden"
            >
              <StarFilledIcon className="h-6 w-6 cursor-pointer p-0.5" />
            </div>
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
              contentItems={movieNotices}
            />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
