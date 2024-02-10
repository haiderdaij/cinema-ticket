import React from "react";
import { FooterData } from "../../utiles/footer";
import Logo from "../../icons/webLogo/logo";

function Footer() {
  return (
    <section id="Support" className="flex items-center justify-center bg-black">
      <div className="flex w-full flex-col gap-6 text-white">
        <div className="title w-full">
          <h1 className="w-full text-center lg:w-[65%] lg:text-left">
            {FooterData.title}
          </h1>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          <p className="w-full text-center text-grayA11 lg:w-[65%] lg:text-left">
            {FooterData.subtitle}
          </p>
          <div className="relative m-auto w-[70%] rounded-sm border border-grayA6 lg:w-[30%]">
            <input
              placeholder="you@gmail.com"
              name="email"
              className="w-full rounded-sm bg-grayA5 px-1  py-2 placeholder:pl-1 placeholder:text-grayA10"
            />
            <div className="absolute right-0 top-0 h-full w-[40%] lg:w-[30%]">
              <button
                className="h-full w-full 
               rounded-br-sm rounded-tr-sm bg-red10 text-sm font-bold text-white"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="my-6 flex flex-row justify-between">
            <div className="inline-flex items-center gap-2">
              <Logo />
              <h1 className="font-serif text-lg font-bold">Since 1897</h1>
            </div>
            <div className="flex flex-row items-center justify-between space-x-4">
              {FooterData.socialMedia.map((item) => {
                return (
                  <a
                    href={item.link}
                    key={item.alt}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.icon}
                  </a>
                );
              })}
            </div>
          </div>
          <hr className="border-grayA7" />
          <p className="my-6 w-full text-center text-sm text-grayA10">
            {FooterData.copyRight}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
