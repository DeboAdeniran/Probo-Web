import React from "react";

function FeatureCard({ title, subheader, description, children }) {
  return (
    <div className="bg-shark-50 p-9 rounded-2xl flex flex-col justify-start items-start gap-4 min-h-[618px]">
      <p className="text-flamingo-700 bg-flamingo-50 border-1 border-flamingo-300 font-bold px-2 py-1 text-xs  ">
        {title}
      </p>
      <h2 className="text-4xl font-bold">{subheader}</h2>
      <p className="text-[20px] text-custom2-grey text-start ">{description}</p>
      <div className="flex justify-center items-center h-full w-full">
        {children}
      </div>
    </div>
  );
}

export default FeatureCard;
