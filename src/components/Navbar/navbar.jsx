import React from "react";
import { BellIcon, FilmIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

function Navbar() {
  function handleClickMenuNavItem(id) {
    const element = document.getElementById(id);
    if (element)
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  }
  return (
    <header>
      <section className="flex items-center">
        <div className="flex h-full w-full items-center justify-between">
          <NavLink
            to={"/"}
            className="text-amber10 inline-flex h-full cursor-pointer items-center rounded-sm"
          >
            <FilmIcon className="h-8 w-8" />
            <h1 className="ml-1 font-serif font-bold">1897</h1>
          </NavLink>

          <div
            className="text-grayA11 transitionTouch hidden
           flex-row items-center justify-center gap-10 md:flex"
          >
            <div>
              <h1 className="font-bold">Favorite</h1>
            </div>
            <div>
              <h1 className="font-bold">Genre</h1>
            </div>
            <div
              className="transitionTouch cursor-pointer hover:text-white"
              onClick={() => {
                handleClickMenuNavItem("Support");
              }}
            >
              <h1 className="font-bold">Support</h1>
            </div>
          </div>

          <div className="relative flex items-center justify-end">
            <div
              className="hover:bg-grayA7
             transitionTouch border-gray11 cursor-pointer rounded-full border"
            >
              <BellIcon className="h-6 w-6 p-0.5" />
              <div
                className="bg-red10 absolute bottom-4 right-4 h-5 w-5 
              rounded-full text-center text-sm "
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
