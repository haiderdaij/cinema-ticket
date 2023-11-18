import React from "react";
import { BellIcon, FilmIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import NavMenuItems from "./navMenuItems";

function Navbar() {
  return (
    <header>
      <section className="flex items-center">
        <div className="flex h-full w-full items-center justify-between">
          <NavLink
            to={"/"}
            className="inline-flex h-full cursor-pointer items-center rounded-sm text-amber10"
          >
            <FilmIcon className="h-8 w-8" />
            <h1 className="ml-1 font-serif font-bold">1897</h1>
          </NavLink>

          <NavMenuItems />

          <div className="relative flex items-center justify-end">
            <div
              className="transitionTouch
             cursor-pointer rounded-full border border-gray11 hover:bg-grayA7"
            >
              <BellIcon className="h-6 w-6 p-0.5" />
              <div
                className="absolute bottom-4 right-4 h-5 w-5 rounded-full 
              bg-red10 text-center text-sm "
              >
                2
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Navbar;
