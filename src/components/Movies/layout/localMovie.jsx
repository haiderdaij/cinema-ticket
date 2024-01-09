import React, { forwardRef, useState } from "react";
import { useParams } from "react-router-dom";
import { actionMovies } from "../../../utiles/movies";
import SelectRadix from "../../widget/select";
import FoodDrinks from "./components/foodDrinks";
import RadioButton from "../../widget/radio";
import MovieDetails from "./components/movieDetails";

const InputField = forwardRef(({ className, ...props }, forwardedRef) => (
  <input
    {...props}
    ref={forwardedRef}
    required
    className={`rounded-sm px-2 py-1 text-black ${className}`}
  />
));
InputField.displayName = "InputField";

function LocalMovie({ Error }) {
  const [seats, setSeats] = useState([]);
  const [openPaymentMethod, setOpenPaymentMethod] = useState(false);
  const [selectedDateValue, setSelectedDateValue] = useState(null);
  const [foodDrinksPrice, setFoodDrinksPrice] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleChangeDate = (value) => {
    setSelectedDateValue(value);
  };

  const calculateSum = (array) => {
    let add = 0;
    for (let i = 0; i < array.length; i++) {
      add += parseFloat(array[i].price.replace("$", ""));
    }
    return add;
  };
  let seatsPrice = calculateSum(seats);

  function totalPrice() {
    return `${seatsPrice + foodDrinksPrice}$`;
  }

  let params = useParams()?.movie;
  const selectedMovie = actionMovies.find((movie) => movie.id === params);
  if (!selectedMovie) {
    return Error;
  }

  let buyCondition =
    cardNumber.length === 12 &&
    fullName.length >= 3 &&
    exp.length === 5 &&
    cvv.length === 3 &&
    zipCode.length === 5;

  return (
    <div className="mb-40 h-full w-full">
      <MovieDetails selectedMovie={selectedMovie} />
      <div className="customGradient mt-section">
        <div
          className="m-auto mt-subSection 
         flex max-w-screen-2xl flex-col items-center justify-center px-6"
        >
          <div className="mb-subSection">
            <h1 className="text-5xl font-bold">Let's buy a ticket!</h1>
          </div>
          <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-row lg:justify-between">
            <div className="flex w-full flex-col gap-4 rounded-md border border-grayA8 p-4 lg:w-[50%]">
              <div className="flex w-full flex-col gap-2">
                <h1 className="text-lg font-bold text-grayA11">Date</h1>
                <SelectRadix handleChangeDate={handleChangeDate} />
              </div>
              <div className="flex w-full flex-col gap-2">
                <h1 className="text-lg font-bold text-grayA11">Seats</h1>
                <RadioButton seats={seats} setSeats={setSeats} />
              </div>
            </div>
            <FoodDrinks setFoodDrinksPrice={setFoodDrinksPrice} />
          </div>
          {!openPaymentMethod &&
            seats.length > 0 &&
            selectedDateValue !== null && (
              <div className="mt-subSection flex items-center justify-center">
                <button
                  className="transitionTouch rounded-md border border-gray2 bg-amberA10
              px-4 py-2 text-center font-bold text-black lg:hover:bg-grayA4 lg:hover:text-white"
                  onClick={() => {
                    setOpenPaymentMethod(!openPaymentMethod);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          {openPaymentMethod && (
            <div
              className="transitionTouch m-auto mt-subSection
              flex w-full max-w-screen-md flex-col
              items-center justify-center gap-4"
            >
              <div
                className="flex w-full flex-col items-center 
              justify-center gap-2 rounded-md bg-amberA10/90 p-4 text-black"
              >
                <h1 className="text-xl font-bold">{selectedDateValue}</h1>
                <h1 className="font-bold">{seats.length} Admission</h1>
                <div className="h-[1px] w-full bg-black" />
                <div className="flex w-full items-center justify-between">
                  <h1 className="font-bold">Seats Price</h1>
                  <h2>{seatsPrice}$</h2>
                </div>
                <div className="flex w-full items-center justify-between">
                  <h1 className="font-bold">Food & Drinks Price</h1>
                  <h2>{foodDrinksPrice}$</h2>
                </div>
                <div className="flex w-full items-center justify-between">
                  <h1 className="font-bold">Total</h1>
                  <h2>{totalPrice()}</h2>
                </div>
              </div>
              <div className="flex w-full flex-col gap-4 rounded-md border border-amberA10 p-4">
                <h1 className="text-xl font-bold">Payment Method</h1>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray5">CARD NUMBER</h2>
                  <InputField
                    placeholder="0000 0000 0000 0000"
                    maxLength={12}
                    type="text"
                    value={cardNumber}
                    onChange={(e) => {
                      const numericValue = e.target.value.replace(/\D/g, "");
                      setCardNumber(numericValue);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray5">FULL NAME</h2>
                  <InputField
                    placeholder="HASSAN ALI"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-row gap-2">
                  <div className="">
                    <h2 className="text-gray5">EXP</h2>
                    <InputField
                      placeholder="MM/YY"
                      className="w-24"
                      type="text"
                      maxLength={5}
                      value={exp}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "");
                        if (value.length > 2) {
                          value = value.slice(0, 2) + "/" + value.slice(2);
                        }
                        setExp(value.slice(0, 5));
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-gray5">CVV</h2>
                    <InputField
                      placeholder="000"
                      className="w-24"
                      maxLength={3}
                      value={cvv}
                      type="text"
                      onChange={(e) => {
                        const numericValue = e.target.value.replace(/\D/g, "");
                        setCvv(numericValue);
                      }}
                    />
                  </div>
                  <div>
                    <h2 className="text-gray5">ZIP CODE</h2>
                    <InputField
                      placeholder="00000"
                      className="w-24"
                      maxLength={5}
                      value={zipCode}
                      type="text"
                      onChange={(e) => {
                        const numericValue = e.target.value.replace(/\D/g, "");
                        setZipCode(numericValue);
                      }}
                    />
                  </div>
                </div>
              </div>
              <button
                disabled={!buyCondition}
                className={`transitionTouch mt-4 w-full rounded-md border
                 border-gray2 bg-amberA10 px-4 py-2 text-center
                  font-bold text-black lg:hover:bg-grayA4
                   lg:hover:text-white ${
                     !buyCondition &&
                     "cursor-not-allowed border-none bg-amberA10/50 lg:hover:bg-amberA10/50 lg:hover:text-black"
                   }`}
              >
                Buy
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LocalMovie;
