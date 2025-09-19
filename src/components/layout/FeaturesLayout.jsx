import React from "react";
import Automation from "../../assets/images/automation.png";
import collaboration from "../../assets/images/collaboration.png";
import visibilty from "../../assets/images/visibility.png";
import scalability from "../../assets/images/scalability.png";
import FeatureCard from "../ui/featureCard";

function FeaturesLayout() {
  return (
    <div className="h-auto px-32 py-20 flex justify-center items-center flex-col gap-4 ">
      <p className="text-flamingo-700 font-bold text-center">WHY PROBO?</p>
      <h1 className=" text-6xl font-medium text-center w-[80%] ">
        The best in class tools to manage your business in one place
      </h1>
      <div className=" justify-center items-stretch pt-16 gap-4 grid grid-cols-2">
        <FeatureCard
          title={"AUTOMATION"}
          subheader={"Effortless workflow automation"}
          description={
            "Automate repetitive tasks and eliminate inefficiencies. Set up workflows that trigger actions, assign tasks, and keep processes moving without manual intervention."
          }
        >
          <div className="w-full flex items-center justify-center">
            <img src={Automation} alt="" />
          </div>
        </FeatureCard>
        <FeatureCard
          title={"COLLABORATION"}
          subheader={"Seamless team coordination"}
          description={
            "Keep your team aligned with shared workflows, real-time updates, and task tracking. Ensure everyone knows their role and stays on top of deadlines."
          }
        >
          <div className="w-full flex items-center justify-center">
            <img src={collaboration} alt="" />
          </div>
        </FeatureCard>
        <FeatureCard
          title={"VISIBILITY"}
          subheader={"Real-time insights & reporting"}
          description={
            "Gain full visibility into your processes with live dashboards and detailed reports. Identify bottlenecks, measure performance, and make data-driven decisions."
          }
        >
          <div>
            <img src={visibilty} alt="" />
          </div>
        </FeatureCard>
        <FeatureCard
          title={"SCALABILITY"}
          subheader={"Customizable & built to grow"}
          description={
            "Whether you're a small business or an enterprise, our platform adapts to your needs. Customize workflows, integrate with existing tools, and scale effortlessly."
          }
        >
          <div>
            <img src={scalability} alt="" />
          </div>
        </FeatureCard>
      </div>
    </div>
  );
}

export default FeaturesLayout;
