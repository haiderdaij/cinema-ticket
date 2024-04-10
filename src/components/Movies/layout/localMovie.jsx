import React, { forwardRef, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { combinedMovies } from "../../../utiles/movies";
import SelectRadix from "../../widget/select";
import FoodDrinks from "./components/foodDrinks";
import RadioButton from "../../widget/radio";
import MovieDetails from "./components/movieDetails";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { props } from "../../../utiles/property";
import { TrashIcon } from "@radix-ui/react-icons";
import DialogRadix from "../../widget/dialog";
import * as LottiePlayer from "@lottiefiles/lottie-player";

const InputField = forwardRef(({ className, ...props }, forwardedRef) => (
  <input
    {...props}
    ref={forwardedRef}
    required
    className={`rounded-sm px-2 py-1 text-black ${className}`}
  />
));
InputField.displayName = "InputField";

function LocalMovie({ Error, setFavourite, favourite }) {
  let params = useParams()?.movie;

  const [seats, setSeats] = useState([]);
  const [openPaymentMethod, setOpenPaymentMethod] = useState(false);
  const [selectedDateValue, setSelectedDateValue] = useState(null);
  const [foodDrinksPrice, setFoodDrinksPrice] = useState(0);
  const [cardNumber, setCardNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [alreadyBuy, setAlreadyBuy] = useLocalStorage("alreadyBuy", []);
  const [takeAction, setTakeAction] = useState(false);
  const [emailIsSend, setEmailIsSend] = useState(false);

  const handleChangeDate = (value) => {
    setSelectedDateValue(value);
  };

  let trueInputEmail = email.search("@") !== -1;

  let buyCondition =
    cardNumber.length === 12 &&
    fullName.length >= 3 &&
    trueInputEmail &&
    exp.length === 5 &&
    cvv.length === 3 &&
    zipCode.length === 5;

  let alreadBuyWithParams = alreadyBuy.filter((m) => m.params === params);

  const timeToReload = () => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.reload();
      }
    }, 3000);
  };
  console.log(seats);

  const sendEmail = async (emailPayloadObj) => {
    setTakeAction(true);
    setOpenPaymentMethod(true);
    try {
      const response = await fetch("http://84.247.179.213:3500/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayloadObj),
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        console.log("Email sent successfully:", jsonResponse);
        setEmailIsSend(true);
        timeToReload();
      } else {
        setTakeAction(false);
        console.error("Failed to send email.");
        timeToReload();
      }
    } catch (error) {
      setTakeAction(false);
      console.error("Error sending email:", error);
      timeToReload();
    }
  };

  console.log(
    "We hope that you find good reason to undo your admission. \nyou can try another plan any time!",
  );

  const onSubmitBuyTicket = useCallback(
    (name) => {
      let updateBuyTicket = [
        ...alreadyBuy,
        {
          id: props.generateId(),
          params: params,
          date: selectedDateValue,
          admission: seats?.length,
          seats: seats,
          email: email,
        },
      ];
      setAlreadyBuy(updateBuyTicket);
      sendEmail({
        to: email,
        subject: name,
        text: `Thank you..\ndate: ${selectedDateValue}\nadmission: ${
          seats?.length
        }\nseats: [${seats.flatMap((item) => item.identifier)}]`,
      });
    },
    [buyCondition],
  );

  const onSubmitDeleteTicket = useCallback((id, name, email) => {
    let updateDeleteTicket = alreadBuyWithParams.filter((m) => m.id !== id);
    setAlreadyBuy(updateDeleteTicket);
    sendEmail({
      to: email,
      subject: name,
      text: "We hope that you find good reason to undo your admission.\n you can try another plan any time!",
    });
  }, []);

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

  const selectedMovie = combinedMovies.find((movie) => movie.id === params);
  if (!selectedMovie) {
    return Error;
  }

  return (
    <div className="mb-40 h-full w-full">
      <MovieDetails
        selectedMovie={selectedMovie}
        favourite={favourite}
        setFavourite={setFavourite}
      />
      <div className="customGradient mt-section">
        <div
          className="m-auto mt-subSection 
         flex max-w-screen-2xl flex-col items-center justify-center px-6"
        >
          <div className="mb-subSection">
            <h1 className="text-5xl font-bold">Let's buy a ticket!</h1>
          </div>
          {alreadBuyWithParams.length > 0 && (
            <div className="mb-subSection flex w-full flex-col items-center justify-center gap-4">
              <h1 className="animate-pulse text-xl font-bold text-redA10">
                Already Buy some ticket, you have now{" "}
                {3 - alreadBuyWithParams.length} deal to try!
              </h1>
              {alreadBuyWithParams.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex w-full items-center justify-between
                      rounded-md border border-gray12 bg-grayA3 px-4 py-2"
                  >
                    <div>
                      <div>{item.date}</div>
                      <div>{item.admission} Admission</div>
                    </div>
                    <div
                      onClick={() => {
                        onSubmitDeleteTicket(
                          item.id,
                          selectedMovie.name,
                          item.email,
                        );
                      }}
                      className="transitionTouch cursor-pointer rounded-full bg-white p-0.5 lg:hover:bg-grayA10"
                    >
                      <TrashIcon className="h-6 w-6 text-black" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {alreadBuyWithParams.length < 3 && (
            <div className="flex w-full flex-col items-start justify-center gap-4 lg:flex-row lg:justify-between">
              <div className="flex w-full flex-col gap-4 rounded-md border border-grayA8 p-4 lg:w-[50%]">
                <div className="flex w-full flex-col gap-2">
                  <h1 className="text-lg font-bold text-grayA11">Date</h1>
                  <SelectRadix handleChangeDate={handleChangeDate} />
                </div>
                <div className="flex w-full flex-col gap-2">
                  <h1 className="text-lg font-bold text-grayA11">Seats</h1>
                  <RadioButton
                    seats={seats}
                    setSeats={setSeats}
                    alreadBuyWithParams={alreadBuyWithParams}
                    selectedDateValue={selectedDateValue}
                  />
                </div>
              </div>
              <FoodDrinks setFoodDrinksPrice={setFoodDrinksPrice} />
            </div>
          )}

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
                    placeholder="huseein ali"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-gray5">EMAIL</h2>
                    {!trueInputEmail && email.length > 0 && (
                      <h2 className="font-semibold text-red9">
                        Try to write your email correctly!
                      </h2>
                    )}
                    {trueInputEmail && (
                      <h2 className="font-semibold text-amberA10">Correct!</h2>
                    )}
                  </div>
                  <InputField
                    placeholder="example@gmail.com"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
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
                onClick={() => {
                  onSubmitBuyTicket(selectedMovie.name);
                }}
                disabled={!buyCondition}
                className={`transitionTouch mt-4 w-full rounded-md border
                 border-gray2 bg-amberA10 px-4 py-2 text-center
                  font-bold text-black ${
                    !buyCondition
                      ? "cursor-not-allowed border-none bg-amberA10/50"
                      : "lg:hover:bg-grayA4 lg:hover:text-white"
                  }`}
              >
                Buy
              </button>
              {takeAction && (
                <div className="fixed top-0 z-[1000] flex h-full w-full items-center justify-center bg-black/90">
                  {emailIsSend ? (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                      <h1 className="text-4xl font-bold text-white">
                        Thank you, you can check your email now!
                      </h1>
                      <lottie-player
                        autoplay
                        mode="normal"
                        background="transparent"
                        src="https://lottie.host/25eb6369-7856-438a-bb89-c8acfda5748d/2ufaEMA15S.json"
                        style={{
                          width: "400px",
                          height: "400px",
                        }}
                      ></lottie-player>
                    </div>
                  ) : (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        className="h-10 w-10 animate-spin fill-amber10 text-gray-200 dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LocalMovie;
