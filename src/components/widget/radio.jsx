import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import ToolTibRadix from "./tooltip";

function RadioButton({ seats, setSeats }) {
  const isAcceptIdentifier = (identifier) => {
    return seats.some((se) => se.identifier === identifier);
  };

  let price = "9.99$";

  return (
    <form
      className="flex h-full w-full flex-col
     items-center justify-center gap-4
      overflow-hidden rounded-md bg-grayA4 p-4"
    >
      {Array.from({ length: 12 }).map((_, primaryIndex) => {
        let newPrimaryIndex = primaryIndex + 1;
        return (
          <RadioGroup.Root
            key={newPrimaryIndex}
            className="flex flex-row items-center gap-2"
            aria-label="View density"
          >
            {Array.from({ length: 12 }).map((_, secondaryIndex) => {
              let newSecondaryIndex = secondaryIndex + 1;
              let specialIndex = `${newSecondaryIndex}:${newPrimaryIndex}`;
              return (
                <ToolTibRadix
                  key={secondaryIndex}
                  trigger={
                    <RadioGroup.Item
                      className="h-[20px] w-[20px] cursor-pointer
             rounded-full bg-white shadow-[0_2px_10px] shadow-blackA4
              outline-none hover:bg-gray6 focus:shadow-[0_0_0_2px] focus:shadow-black"
                      value={newSecondaryIndex}
                      id={specialIndex}
                      checked={isAcceptIdentifier(specialIndex)}
                      onClick={() => {
                        let updateSeats;
                        if (isAcceptIdentifier(specialIndex)) {
                          updateSeats = seats.filter(
                            (se) => se.identifier !== specialIndex,
                          );
                        } else {
                          updateSeats = [
                            ...seats,
                            {
                              id: newPrimaryIndex,
                              identifier: specialIndex,
                              price: price,
                            },
                          ];
                        }

                        setSeats(updateSeats);
                      }}
                    >
                      <RadioGroup.Indicator
                        className="relative flex h-full w-full items-center
                     justify-center after:block after:h-[20px] after:w-[20px]
                      after:rounded-[50%] after:bg-red11 after:content-['']"
                      />
                    </RadioGroup.Item>
                  }
                  content={
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h1 className="text-black">{`Row ${newPrimaryIndex}, Seat ${newSecondaryIndex}`}</h1>
                      <h1>{price}</h1>
                    </div>
                  }
                />
              );
            })}
          </RadioGroup.Root>
        );
      })}
    </form>
  );
}
export default RadioButton;
