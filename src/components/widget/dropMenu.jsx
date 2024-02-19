import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function DropMenuRadix({ trigger, contentItems }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-DropDown min-h-[20vh] min-w-[250px] rounded-md bg-white p-[5px]
           shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]
            will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade
             data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          {contentItems.length > 0 ? (
            contentItems.map((item) => {
              return (
                <DropdownMenu.Item
                  key={item.id}
                  className="group relative flex select-none items-center
           rounded-[3px] px-4 py-2 pl-[25px] text-[13px] leading-none text-red11 
           outline-none data-[disabled]:pointer-events-none
            data-[highlighted]:bg-red9 data-[disabled]:text-mauve11 data-[highlighted]:text-red1"
                >
                  {item.title}
                  <div className="ml-auto pl-[20px] text-mauve11 group-data-[disabled]:text-mauve8 group-data-[highlighted]:text-white">
                    ⌘+T
                  </div>
                </DropdownMenu.Item>
              );
            })
          ) : (
            <div className="flex h-full w-full items-center justify-center text-red11">
              There is no Movie yet!
            </div>
          )}

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default DropMenuRadix;
