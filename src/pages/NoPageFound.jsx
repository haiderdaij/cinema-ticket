import React from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";

function NoPageFound() {
  return (
    <section className="h-screen">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-grayA11">Page not found..</h1>
        <lottie-player
          loop
          autoplay
          mode="normal"
          background="transparent"
          src="https://lottie.host/cb77c56a-6a84-4af6-b754-cdf232355d46/g9h4wa9LG6.json"
          style={{
            width: "400px",
            height: "400px",
          }}
        ></lottie-player>
      </div>
    </section>
  );
}

export default NoPageFound;
