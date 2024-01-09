import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

let dates = [
  {
    id: 1,
    label: "Tuesday",
    date: "9 Jan 2024",
    items: ["12:00", "17:00", "22:30"],
  },
  {
    id: 2,
    label: "Friday",
    date: "12 Jan 2024",
    items: ["9:00", "14:00", "18:30"],
  },
  {
    id: 3,
    label: "Sunday",
    date: "14 Jan 2024",
    items: ["15:00", "20:00"],
  },
];
function SelectRadix({ handleChangeDate }) {
  return (
    <Select.Root onValueChange={handleChangeDate}>
      <Select.Trigger
        className="inline-flex h-10 w-full
         items-center 
         justify-center gap-1 rounded-md
          border border-grayA8 bg-grayA2
           px-2 text-[18px] leading-none
            text-white outline-none
             hover:bg-grayA4 focus:shadow-[0_0_0_2px]
              focus:shadow-grayA4 data-[placeholder]:text-white"
        aria-label="Food"
      >
        <Select.Value placeholder="Select a date.." />
        <Select.Icon className="text-amberA10">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="z-Dialog overflow-hidden rounded-md border border-grayA10 bg-gray12 shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-amberA10">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            {dates.map((item) => {
              return (
                <Select.Group key={item.id}>
                  <Select.Label className="px-[25px] text-xs leading-[25px] text-grayA11">
                    {item.label}
                  </Select.Label>
                  {item.items.map((childItem) => {
                    return (
                      <SelectItem
                        value={`${item.date}, ${childItem}`}
                        key={childItem}
                      >
                        {`${item.date}, ${childItem}`}
                      </SelectItem>
                    );
                  })}
                  {item.id !== 3 && (
                    <Select.Separator className="m-[5px] h-[1px] bg-grayA6" />
                  )}
                </Select.Group>
              );
            })}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-gray12 text-amberA10">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-white data-[disabled]:pointer-events-none data-[highlighted]:bg-amberA10 data-[disabled]:text-mauve8 data-[highlighted]:text-black data-[highlighted]:outline-none"
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default SelectRadix;
