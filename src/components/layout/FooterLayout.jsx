import React from "react";
import { Link } from "react-router-dom";
import HuffPosy from "../../assets/svg/huffpost.svg?react";
import Bloomberg from "../../assets/svg/bloomberg.svg?react";
import TCLogo from "../../assets/svg/TC.svg?react";
import HBRLogo from "../../assets/svg/hbr-ar21.svg?react";
import YCombinator from "../../assets/svg/y-combinator-seeklogo.com 1.svg?react";
import FastCompany from "../../assets/svg/Fast_Company_logo 1.svg?react";
import FooterLogo from "../../assets/svg/probo_logo_variant3.svg?react";
import TwitterIcon from "../../assets/svg/twitterIcon.svg?react";
import LinkedInIcon from "../../assets/svg/linkedInIcon.svg?react";
import InstagramIcon from "../../assets/svg/instagram.svg?react";
// import Period from "../../as"

function FooterLayout() {
  return (
    <div className="w-full px-32 pt-3.5 bg-shark-950">
      <div>
        <p className="text-shark-300 font-bold text-center">FEATURED ON</p>
      </div>
      <div className="flex justify-between items-center py-24 border-b-2 border-shark-500">
        <HuffPosy />
        <Bloomberg />
        <TCLogo />
        <HBRLogo />
        <YCombinator />
        <FastCompany />
      </div>
      <div className="py-14 pb-20 border-b-2 border-shark-500 flex justify-between items-start">
        <ul className="flex flex-col gap-1 text-shark-300 text-[18px] ">
          <Link className="text-white">Product</Link>
          <Link>Features</Link>
          <Link>Integrations</Link>
          <Link>Pricing</Link>
          <Link>Use Cases</Link>
          <Link>Demo</Link>
        </ul>

        <ul className="flex flex-col gap-1 text-shark-300 text-[18px] ">
          <Link className="text-white">Company</Link>
          <Link>About Us</Link>
          <Link to="/career">Careers</Link>
          <Link>Contact</Link>
          <Link>Support</Link>
        </ul>

        <ul className="flex flex-col gap-1 text-shark-300 text-[18px] ">
          <Link className="text-white">Learn</Link>
          <Link>Blog</Link>
          <Link>Brand Kit</Link>
          <Link>Community</Link>
          <Link>Video Guides</Link>
        </ul>

        <ul className="flex flex-col gap-1 text-shark-300 text-[18px] ">
          <Link className="text-white">Legal</Link>
          <Link>End-User Policy</Link>
          <Link>Privacy Policy</Link>
          <Link>Term of Use</Link>
          <Link>Security</Link>
        </ul>
      </div>
      <div className="pt-8 pb-16 flex justify-between ">
        <div className="flex items-center justify-center gap-10">
          <div className="flex ">
            <FooterLogo />
            <p className="text-flamingo-500 text-3xl font-bold">Probo</p>
          </div>
          <p className="text-shark-300 text-[18px] font-medium ">
            &copy; 2023 Probo Technologies, Inc. Delaware, US
          </p>
        </div>
        <ul className="text-shark-300 flex  justify-center items-center text-[18px] font-medium gap-8">
          <Link className="flex justify-center items-center gap-3">
            <TwitterIcon />
            <p>Twitter</p>
          </Link>
          <Link>
            <p>&#46;</p>
          </Link>
          <Link className="flex justify-center items-center gap-3">
            <LinkedInIcon />
            <p>LinkedIn</p>
          </Link>
          <Link>
            <p>&#46;</p>
          </Link>

          <Link className="flex justify-center items-center gap-3">
            <InstagramIcon />
            <p>Instagram</p>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default FooterLayout;
