import React from "react";
import Ellipse from "../../assets/svg/ellipse.svg?react";
import ArrowRight from "../../assets/svg/arrow-right.svg?react";

function OpenRoleSlides({ jobTitle, employmentType, location }) {
  return (
    <div className="w-full flex justify-between items-center border-t border-shark-200 py-6 ">
      <div className="flex items-start flex-col gap-3">
        <h2 className="text-flamingo-700 text-[26px] font-medium ">
          {jobTitle}
        </h2>

        <p className="flex justify-center items-center gap-4 uppercase text-shark-400  font-medium text-[18px] ">
          <span>{location} </span> <Ellipse /> <span>{employmentType}</span>
        </p>
      </div>
      <ArrowRight />
    </div>
  );
}

function OpenRolesLayout() {
  return (
    <div className=" w-full px-32 pb-20  pt-56">
      <div className=" flex justify-center items-center flex-col gap-3">
        <p className="text-flamingo-700 text-center font-bold  ">OPEN ROLES</p>
        <h1 className="text-6xl font-medium text-center w-full ">
          Come join the team
        </h1>
      </div>
      <div className="pt-20 flex flex-col gap-8 w-full">
        <OpenRoleSlides
          jobTitle={"Webflow Developer"}
          employmentType={"Full-time"}
          location={"Remote"}
        />
        <OpenRoleSlides
          jobTitle={"Senior Brand Designer"}
          employmentType={"Full-time"}
          location={"Remote"}
        />
        <OpenRoleSlides
          jobTitle={"Head of Strategy & Business Operations"}
          employmentType={"Full-time"}
          location={"Remote"}
        />
        <OpenRoleSlides
          jobTitle={"Senior Customer Success Manager"}
          employmentType={"Full-time"}
          location={"New York"}
        />
      </div>
    </div>
  );
}

export default OpenRolesLayout;
