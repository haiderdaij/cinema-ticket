import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import ToolTibRadix from "./tooltip";
import { CircleBackslashIcon } from "@radix-ui/react-icons";
import { props } from "../../utiles/property";

function RadioButton({
  seats,
  setSeats,
  alreadBuyWithParams,
  selectedDateValue,
}) {
  let notValidAction = selectedDateValue === null;
  return (
    <form
      className={`${
        notValidAction && "pointer-events-none cursor-not-allowed opacity-50"
      } transitionTouch flex h-full
     w-full flex-col items-center
      justify-center gap-4 overflow-hidden rounded-md bg-grayA4 p-4`}
    >
      <div
        className="mb-1 flex w-full flex-col items-center
       justify-center gap-1"
      >
        <div className="h-2 w-full rounded-md bg-white" />
        <h1 className="font-serif font-bold">The Screen</h1>
      </div>

      {Array.from({ length: 6 }).map((_, primaryIndex) => (
        <RadioGroupRow
          primaryIndex={primaryIndex}
          seats={seats}
          setSeats={setSeats}
          key={`group-1-row-${primaryIndex}`}
          alreadBuyWithParams={alreadBuyWithParams}
          selectedDateValue={selectedDateValue}
        />
      ))}

      <div className="my-2 h-px w-full bg-grayA6" />

      {Array.from({ length: 6 }).map((_, primaryIndex) => (
        <RadioGroupRow
          primaryIndex={primaryIndex + 6}
          seats={seats}
          setSeats={setSeats}
          key={`group-2-row-${primaryIndex}`}
          alreadBuyWithParams={alreadBuyWithParams}
          selectedDateValue={selectedDateValue}
        />
      ))}
    </form>
  );
}

function RadioGroupRow({
  primaryIndex,
  seats,
  setSeats,
  alreadBuyWithParams,
  selectedDateValue,
}) {
  let price = "10.5$";
  let newPrimaryIndex = primaryIndex + 1;

  const combinedSeats = alreadBuyWithParams.reduce((acc, obj) => {
    return acc.concat(obj.seats);
  }, []);

  return (
    <RadioGroup.Root
      className="flex flex-row items-center gap-2"
      aria-label={`Row ${newPrimaryIndex}`}
    >
      {Array.from({ length: 12 }).map((_, secondaryIndex) => {
        let newSecondaryIndex = secondaryIndex + 1;
        let specialIndex = `${newSecondaryIndex}:${newPrimaryIndex}`;
        let isDisabled = combinedSeats.some(
          (seat) =>
            seat.date === selectedDateValue && seat.identifier === specialIndex,
        );
        return (
          <ToolTibRadix
            key={specialIndex}
            trigger={
              <RadioGroup.Item
                disabled={isDisabled}
                className={`h-[12px] w-[12px] cursor-pointer rounded-full shadow-[0_2px_10px]
             shadow-blackA4 outline-none focus:shadow-[0_0_0_2px]
              focus:shadow-black lg:h-[20px] lg:w-[20px] ${
                isDisabled ? "" : "bg-white hover:bg-gray6"
              }`}
                value={newSecondaryIndex}
                id={specialIndex}
                checked={props.isAcceptIdentifier(seats, specialIndex)}
                onClick={() => {
                  let updateSeats;
                  if (props.isAcceptIdentifier(seats, specialIndex)) {
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
                        date: selectedDateValue,
                      },
                    ];
                  }

                  setSeats(updateSeats);
                }}
              >
                {isDisabled ? (
                  <CircleBackslashIcon className="h-[12px] w-[12px] text-grayA10 lg:h-[20px] lg:w-[20px]" />
                ) : (
                  <RadioGroup.Indicator
                    className="relative flex h-full w-full items-center
                     justify-center after:block after:h-[12px] after:w-[12px] after:rounded-[50%]
                      after:bg-red11 after:content-[''] lg:after:h-[20px] lg:after:w-[20px]"
                  />
                )}
              </RadioGroup.Item>
            }
            content={
              !isDisabled ? (
                <div className="flex flex-col items-center justify-center gap-2">
                  <h1 className="text-black">{`Row ${newPrimaryIndex}, Seat ${newSecondaryIndex}`}</h1>
                  <h1>{price}</h1>
                </div>
              ) : (
                <h1 className="text-black">Booked!</h1>
              )
            }
          />
        );
      })}
    </RadioGroup.Root>
  );
}

export default RadioButton;
