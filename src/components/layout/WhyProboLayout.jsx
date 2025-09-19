import React from "react";
import Settings from "../../assets/svg/settings.svg?react";
import Network from "../../assets/svg/network.svg?react";
import People from "../../assets/svg/People.svg?react";
import WhyCards from "../ui/whyCards";

function WhyProboLayout() {
  return (
    <div className="h-auto px-32 py-20 bg-shark-950 flex justify-center items-center flex-col gap-4 ">
      <p className="text-flamingo-500 font-bold text-center">WHY PROBO?</p>
      <h1 className="text-white text-6xl font-medium text-center w-[70%] ">
        Built to streamline processes for your business
      </h1>
      <div className="justify-center items-center pt-16 gap-4 grid grid-cols-3 ">
        <WhyCards
          title={"Automate Workflows"}
          description={`Reduce manual tasks, minimize errors, and keep your team focused on
            high-impact work.`}
        >
          <Settings />
        </WhyCards>
        {/*  */}

        <WhyCards
          title={"Keep Teams Aligned"}
          description={`Track, manage, and optimize all your business processes from one
            intuitive platform.`}
        >
          <People />
        </WhyCards>
        {/*  */}
        <WhyCards
          title={"Scale with Ease"}
          description={`Allows you to customize workflows, integrate with existing tools,
            and scale effortlessly as your needs grow.`}
        >
          <Network />
        </WhyCards>
      </div>
    </div>
  );
}

export default WhyProboLayout;
