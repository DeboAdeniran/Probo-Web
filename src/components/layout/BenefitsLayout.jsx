import React from "react";
import Hand from "../../assets/svg/hand.svg?react";
import Heart from "../../assets/svg/heart.svg?react";
import Currency from "../../assets/svg/currency-dollar.svg?react";
import Gift from "../../assets/svg/gift.svg?react";
import Home from "../../assets/svg/home.svg?react";
import TrendingUp from "../../assets/svg/trending-up.svg?react";

function BenefitCards({ image, title, description }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 p-8 ">
      <div className="bg-flamingo-50 flex p-4 rounded-xl ">{image}</div>
      <h4 className="text-[24px] font-bold">{title}</h4>
      <p className="text-[20px] leading-tight text-shark-500">{description}</p>
    </div>
  );
}

function BenefitsLayout() {
  return (
    <div className=" w-full px-32 pt-3.5">
      <div className="pt-28 flex justify-center items-center flex-col gap-3">
        <p className="text-flamingo-700 text-center font-bold  ">BENEFITS</p>
        <h1 className="text-6xl font-medium text-center w-full ">
          Reasons to join Probo
        </h1>
      </div>
      <div className="grid grid-cols-3 pt-20 gap-16">
        <BenefitCards
          title={"Good Vibes & High-Fives"}
          description={
            "We're all about celebrating wins, big or small. Think team shout-outs, virtual hangouts, and maybe surprise party."
          }
          image={<Hand />}
        />
        <BenefitCards
          title={"Keep You Feeling Good Package"}
          description={
            "We've got you covered with all the usual health stuff (medical, dental, vision), and some extras to keep you at your best."
          }
          image={<Heart />}
        />
        <BenefitCards
          title={"Sweet Pay & Perks"}
          description={
            "We believe in paying you what you're worth. Expect a competitive salary and  bonuses for rocking it."
          }
          image={<Currency />}
        />
        <BenefitCards
          title={"Chill Time & Recharge Days"}
          description={
            "We're big on taking breaks. Take those vacations, personal days, and recharge weeks."
          }
          image={<Gift />}
        />
        <BenefitCards
          title={"Work From Your Happy Place"}
          description={
            "We're built for remote, so you can ditch the commute and work in your PJs if you want. We'll support your needs."
          }
          image={<Home />}
        />
        <BenefitCards
          title={"Own a Piece of the Action"}
          description={
            "Want to be part of the Probo family for the long haul? Our stock options let you share in our success."
          }
          image={<TrendingUp />}
        />
      </div>
    </div>
  );
}

export default BenefitsLayout;
