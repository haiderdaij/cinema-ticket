import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function handleClickNavMenuItem(id) {
  const element = document.getElementById(id);
  if (element)
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
}
const genres = ["Action", "Horror", "Comedy"];

function NavMenuItems({ favourite }) {
  const NAV_ITEMS = [
    {
      trigger: "Favorite",
      content: (
        <>
          {favourite.length === 0 ? (
            <div className="w-[800px]">
              <h1>No movie has been added yet!</h1>
            </div>
          ) : (
            <div className="h-[250px] w-[800px] overflow-y-scroll">
              <div className="flex flex-col gap-4">
                {favourite.map((item) => {
                  return (
                    <NavLink
                      to={`/movies/${item.identifier}`}
                      key={item.identifier}
                      className="transitionTouch flex cursor-pointer flex-row
                     items-center gap-2 rounded-md hover:bg-gray4"
                    >
                      <img
                        src={item.image}
                        className="w-10 rounded-md"
                        alt={item.name}
                      />
                      <div>
                        <h1>{item.name}</h1>
                        <h1 className="text-sm text-gray11">{item.type}</h1>
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          )}
        </>
      ),
    },
    {
      trigger: "Genre",
      content: (
        <div className="flex w-[800px] flex-col gap-2">
          {genres.map((g, index) => {
            return (
              <NavLink
                to={"/"}
                className="transitionTouch cursor-pointer text-gray11 hover:text-gray12"
                key={index}
                onClick={() => {
                  handleClickNavMenuItem(g);
                }}
              >
                {g} Movies
              </NavLink>
            );
          })}
        </div>
      ),
    },
  ];
  return (
    <NavigationMenu.Root className="relative hidden md:flex">
      <NavigationMenu.List className="center m-0 flex">
        {NAV_ITEMS.map((item) => {
          return (
            <NavigationMenu.Item key={item.trigger}>
              <NavigationMenu.Trigger
                className="group flex select-none items-center
               justify-between gap-[2px] rounded-sm px-3 py-2
                font-bold leading-none text-grayA11 outline-none
                 hover:text-white"
              >
                <h1 className="font-bold">{item.trigger}</h1>
                <ChevronDownIcon
                  className="relative top-[1px] h-4 w-4 text-white transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>

              <NavigationMenu.Content
                className="absolute left-0
              top-0 w-[800px] p-2 text-black data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto"
              >
                {item.content}
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          );
        })}
        <div
          className="group flex cursor-pointer select-none
               items-center justify-between gap-[2px] rounded-sm px-3
                py-2 font-bold leading-none text-grayA11
                 outline-none hover:text-white focus:shadow-[0_0_0_1px] focus:shadow-amber12"
          onClick={() => {
            handleClickNavMenuItem("Support");
          }}
        >
          Support
        </div>
        <NavigationMenu.Indicator className="top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-sm bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
      <div className="absolute left-0 top-full flex w-full justify-center perspective-[2000px]">
        <NavigationMenu.Viewport
          className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full
         origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 
         data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]"
        />
      </div>
    </NavigationMenu.Root>
  );
}

export default NavMenuItems;
