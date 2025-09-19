import React from "react";
import ProboLogo from "../../assets/svg/primary logo.svg?react";
import { TryForFreeButton } from "../ui/button";

function GetStarted() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full bg-shark-950 text-white py-52 gap-10">
        <ProboLogo />
        <h1 className=" text-6xl font-medium text-center w-[80%] ">
          Get started with Probo today.
        </h1>
        <p className=" w-[35%] text-center text-custom2-grey text-xl">
          Create, collaborate, and monitor your business workflows with our
          intuitive platform and stay on top of every workflow detail.
        </p>
        <div>
          <TryForFreeButton className={"bg-flamingo-700"} type={"30days"} />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
