import React from "react";
import { BellIcon } from "@heroicons/react/24/solid";
import NavMenuItems from "./navMenuItems";
import Logo from "../../icons/webLogo/logo";
import { StarFilledIcon } from "@radix-ui/react-icons";

function Navbar({ favourite }) {
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
