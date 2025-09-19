import React from "react";

function OfficeLocationCard({ image, title }) {
  return (
    <div
      className="p-2 min-h-[320px] rounded-2xl relative "
      // style={{
      //   backgroundImage: `url(${image})`,
      // }}
    >
      <img src={image} className="w-full h-full" />
      <p className="text-white px-4 py-2 bg-flamingo-700 absolute bottom-4 left-4 rounded-full ">
        {title}
      </p>
    </div>
  );
}

export default OfficeLocationCard;
