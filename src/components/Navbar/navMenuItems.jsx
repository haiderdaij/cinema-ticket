import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

function handleClickNavMenuItem(id) {
  const element = document.getElementById(id);
  if (element)
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
}
function NavMenuItems() {
  const NAV_ITEMS = [
    {
      trigger: "Favorite",
      content: (
        <div className="w-[800px]">
          <h1 className="">No movie has been added yet!</h1>
        </div>
      ),
    },
    {
      trigger: "Genre",
      content: <div className="w-[800px]">Three Section</div>,
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
                className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight
              data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight
               absolute left-0 top-0 w-full p-5 text-black sm:w-auto"
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
        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-sm bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>
      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport
          className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px]
         h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white 
         transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]"
        />
      </div>
    </NavigationMenu.Root>
  );
}

export default NavMenuItems;
