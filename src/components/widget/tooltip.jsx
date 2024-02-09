import React, { useState } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

function ToolTibRadix({ trigger, content }) {
  const [open, setOpen] = useState(false);

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root
        delayDuration={0}
        open={open}
        onOpenChange={setOpen}
      >
        <TooltipPrimitive.Trigger
          asChild
          aria-label="Open tooltip"
          onClick={() => setOpen(!open)}
          // onFocus={() => setOpen(true)}
          // onMouseEnter={() => setOpen(true)}
          // onMouseLeave={() => setOpen(false)}
          // onBlur={() => setOpen(false)}
        >
          {trigger}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={5}
            side={"top"}
            align={"center"}
            avoidCollisions={true}
            className="select-none rounded-md bg-white
            px-[15px] py-[10px] text-[18px]
              font-bold leading-none text-red11 
            shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
            will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade
             data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade
              data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-white" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export default ToolTibRadix;
