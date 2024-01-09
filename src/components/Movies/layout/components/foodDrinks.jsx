import React, { useEffect, useState } from "react";
import { PlusCircledIcon, MinusCircledIcon } from "@radix-ui/react-icons";

const foodDrinksItems = [
  {
    id: 1,
    label: "POPCORN",
    price: "2.5$",
  },
  {
    id: 2,
    label: "NACHOS",
    price: "4$",
  },
  {
    id: 3,
    label: "Pepsi",
    price: "0.5$",
  },
  {
    id: 4,
    label: "Classic burger",
    price: "6$",
  },
  {
    id: 5,
    label: "Americano",
    price: "3.5$",
  },
  {
    id: 6,
    label: "Galaxy bar",
    price: "1$",
  },
];

function FoodDrinks({ setFoodDrinksPrice }) {
  const [itemCounts, setItemCounts] = useState({});

  function plusCount(itemId) {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  }

  function minusCount(itemId) {
    setItemCounts((prevCounts) => {
      const newCount = (prevCounts[itemId] || 0) - 1;
      return newCount >= 0 ? { ...prevCounts, [itemId]: newCount } : prevCounts;
    });
  }

  function calculatePrice(price, count) {
    let newValue = parseFloat(price.replace("$", ""), 10) * count;
    return newValue;
  }

  useEffect(() => {
    let totalPrice = 0;
    for (const itemId in itemCounts) {
      if (itemCounts.hasOwnProperty(itemId)) {
        const count = itemCounts[itemId];
        const item = foodDrinksItems.find(
          (item) => item.id === parseInt(itemId, 10),
        );
        if (item) {
          totalPrice += calculatePrice(item.price, count);
        }
      }
    }
    setFoodDrinksPrice(totalPrice);
  }, [itemCounts]);

  return (
    <div
      className="flex w-full flex-col gap-4
              rounded-md border border-grayA8 p-4 lg:w-[50%]"
    >
      <h1 className="text-center text-2xl font-bold text-grayA11">
        Food & Drinks
      </h1>
      <div className="h-[1px] w-full bg-gray10" />
      <div className="flex h-full w-full flex-col gap-4">
        {foodDrinksItems.map((item) => {
          const itemId = item.id;
          const count = itemCounts[itemId] || 0;
          const price = item.price;
          return (
            <div key={item.id} className="grid grid-cols-3 gap-4">
              <h1 className="font-bold">{item.label}</h1>
              <h2 className="text-amberA10">
                {count === 0 ? price : `${calculatePrice(price, count)}$`}
              </h2>
              <div className="flex flex-row items-center justify-center">
                <MinusCircledIcon
                  className={`h-4 w-4 cursor-pointer ${
                    count === 0 && "text-grayA10"
                  }`}
                  onClick={() => {
                    minusCount(itemId);
                  }}
                />
                <div className="mx-4 flex h-4 w-4 items-center justify-center">
                  <h1 className="text-center text-amberA10">{count}</h1>
                </div>
                <PlusCircledIcon
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => {
                    plusCount(itemId);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FoodDrinks;
