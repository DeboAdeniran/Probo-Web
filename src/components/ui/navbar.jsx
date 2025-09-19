import React from "react";
import ProboLogo from "../../assets/svg/probo_logo.svg?react";
import Dropdown from "../../assets/svg/dropdown.svg?react";
import { TryForFreeButton } from "./button";

function Navbar() {
  //   const { TryForFreeButton } = Buttons();
  return (
    <div className="flex items-center justify-between w-full rounded-full bg-white py-2 px-4 shadow-lg">
      <div className="flex items-center justify-center gap-2">
        <ProboLogo className="h-10 w-10" />
        <p className="font-bold text-2xl">Probo</p>
      </div>
      <ul className="flex items-center justify-center gap-10 text-[16px] font-medium ">
        <li className="flex items-center justify-center gap-2">
          Product <Dropdown />
        </li>
        <li className="flex items-center justify-center gap-2">
          Company <Dropdown />
        </li>
        <li className="flex items-center justify-center gap-2">
          Learn <Dropdown />
        </li>
        <li>Pricing</li>
        <li>Demo</li>
      </ul>
      <div className="">
        <TryForFreeButton className={"bg-shark-950"} />
      </div>
    </div>
  );
}

export default Navbar;
