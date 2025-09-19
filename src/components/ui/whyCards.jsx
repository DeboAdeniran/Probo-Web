import React from "react";

function WhyCards({ children, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl flex gap-4 flex-col pb-20 pr-20 ">
      <div className="w-16 h-16 rounded-xl bg-flamingo-50 flex justify-center items-center">
        {children}
        {/* <Network /> */}
      </div>
      <h2 className="font-bold text-xl  ">{title}</h2>
      <p className="text-custom2-grey">{description}</p>
    </div>
  );
}

export default WhyCards;
