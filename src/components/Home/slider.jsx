import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { combinedMovies } from "../../utiles/movies";
import IframeModel from "../widget/iframe";
import { NavLink } from "react-router-dom";

function Slider() {
  return (
    <div className="mt-16 flex h-full w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="h-full w-full"
      >
        {combinedMovies.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="SliderContent">
                <div className="m-auto h-full w-[75%] lg:w-[90%]">
                  <img
                    src={item.srcImage}
                    className="h-full w-full object-contain align-middle"
                    alt="movie"
                  />
                </div>
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 text-center">
                  <div className="flex gap-2 text-left">
                    <h1 className="text-3xl font-bold lg:text-5xl">
                      {item.name}
                    </h1>
                    <h2 className="text-sm font-bold text-amber7">
                      {item.rate}
                    </h2>
                  </div>
                  <div className="flex w-[80%] flex-col gap-2 text-grayA11">
                    <h2>{item.description}</h2>
                    <h2 className="text-white">{item.time}</h2>
                  </div>
                  <div className="inline-flex items-center gap-4">
                    <NavLink
                      target="_blank"
                      rel="noreferrer"
                      to={`/movies/${item.id}`}
                      className="actionButton border border-amber7 bg-transparent px-4 text-sm text-white hover:bg-amber-950 lg:text-lg"
                    >
                      Buy Ticket
                    </NavLink>
                    <IframeModel
                      link={item.trailerLink}
                      buttonStyle={"px-4 text-sm lg:text-lg"}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider;
