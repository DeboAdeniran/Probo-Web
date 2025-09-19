import React from "react";
import gridbg from "../../assets/svg/grid_bg.svg";
import Navbar from "../ui/navbar";
import Star from "../../assets/svg/Star.svg?react";
import HeroImage from "../../assets/svg/hero image.svg?react";
import { TryForFreeButton, RequestDemo } from "../ui/button";

function MainLayout() {
  return (
    <div
      style={{ backgroundImage: `url(${gridbg})` }}
      className="h-auto w-full"
    >
      <div className="w-full px-32 pt-3.5">
        <Navbar />
        <div className="pt-16 w-full flex flex-col gap-4">
          <div className="flex w-full items-center justify-center gap-3 ">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="flex items-center justify-center">
            <p className="bg-white text-[14px] font-bold border-2 border-custom2-grey rounded-full shadow-lg px-7 py-1 ">
              Process Management Software for Business
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 pt-8">
          <h1 className="text-6xl font-medium text-center w-[70%] ">
            Grow Your <span className="text-flamingo-700">Business</span>, Spend
            Less Time <span className="text-flamingo-700">Managing</span>
          </h1>
          <p className=" w-[55%] text-center text-custom2-grey text-xl">
            Create, collaborate, and monitor your business workflows with our
            intuitive platform and stay on top of every workflow detail.
          </p>
          <div className="flex gap-4 items-center justify-center flex-col pt-4 w-full">
            <div className="flex w-1/2 gap-4">
              <TryForFreeButton className={"bg-shark-950"} type={"30days"} />
              <RequestDemo />
            </div>
            <p className="text-center text-custom2-grey text-xl">
              No credit card required
            </p>
          </div>
        </div>
        <div className="w-full pt-20">
          <HeroImage className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
