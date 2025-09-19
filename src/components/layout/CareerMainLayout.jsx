import React from "react";
import gridbg from "../../assets/svg/grid_bg.svg";
import Navbar from "../ui/navbar";
import { TryForFreeButton } from "../ui/button";
import OfficeLocationCard from "../ui/officeLocationCard";
import newyorkImage from "../../assets/images/new york.png";
import londonImage from "../../assets/images/london.png";
import southKoreaImage from "../../assets/images/south korea.png";
import remoteImage from "../../assets/images/remote.png";

function CareerMainLayout() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${gridbg})` }}
        className="h-dvh w-full"
      >
        <div className="absolute w-full px-32 pt-3.5">
          <Navbar />
          <div className="  pt-16 w-full">
            <div className="flex flex-col justify-center items-center gap-10 ">
              <p className="text-flamingo-700 text-center font-bold ">
                CAREERS AT PROBO
              </p>
              <h1 className="text-7xl font-medium text-center w-full ">
                Join our team of top talents
              </h1>
              <p className=" w-[45%] text-center text-custom2-grey text-xl font-medium">
                We pride ourselves in hiring diverse, ambitious, and smart
                people, allowing them to do their best work every day.
              </p>
              <div className="flex w-[15%] gap-4">
                <TryForFreeButton className={"bg-shark-950"} type="OpenRole" />
              </div>
            </div>
          </div>
          <div className="relative bottom-[-6rem] bg-white w-full flex flex-col justify-center items-center py-32 gap-10 shadow-lg rounded-[50px] ">
            <h1 className="text-[52px] font-medium text-center w-full ">
              We’re a company with big ambitious
            </h1>
            <p className=" w-[45%] text-center text-custom2-grey text-xl font-medium">
              We pride ourselves in hiring diverse, ambitious, and smart people,
              allowing them to do their best work every day.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-64 pb-40 px-32 items-stretch justify-between bg-shark-950 h-auto flex gap-20">
        <div className="flex flex-col gap-28  items-start justify-between w-full h-auto ">
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl font-bold text-white w-[10%] text-start">
              Office Locations
            </h2>
            <p className=" w-[88%]  text-start text-custom2-grey text-xl font-medium">
              Create, collaborate, and monitor your business workflows with our
              intuitive platform and stay on top of every workflow detail.
            </p>
          </div>
          <div className="flex flex-col items-start justify-between h-full">
            <div className="text-white flex flex-col gap-2 ">
              <h3 className="text-2xl font-medium ">LONDON</h3>
              <p className="text-shark-300 text-[18px]">Europe Headquarters</p>
            </div>
            <div className="text-white flex flex-col gap-2 ">
              <h3 className="text-2xl font-medium ">NEW YORK</h3>
              <p className="text-shark-300 text-[18px]">US Headquarters</p>
            </div>
            <div className="text-white flex flex-col gap-2 ">
              <h3 className="text-2xl font-medium ">SOUTH KOREA</h3>
              <p className="text-shark-300 text-[18px]">Asia Headquarters</p>
            </div>
            <div className="text-white flex flex-col gap-1  ">
              <h3 className="text-2xl font-medium ">REMOTE</h3>
              <p className="text-shark-300 text-[18px]">Worldwide</p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto justify-center items-stretch  gap-10 grid grid-cols-2 ">
          <OfficeLocationCard title={"New York"} image={newyorkImage} />
          <OfficeLocationCard title={"London"} image={londonImage} />
          <OfficeLocationCard title={"South Korea"} image={southKoreaImage} />
          <OfficeLocationCard title={"Remote"} image={remoteImage} />
        </div>
      </div>
    </div>
  );
}

export default CareerMainLayout;
