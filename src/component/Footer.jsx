import React from "react";
import { ReactComponent as SMS } from "../assets/sms.svg";
import { ReactComponent as Call } from "../assets/call.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import LinkedIn from "../assets/linkedIn.svg";
import { Link } from "react-router-dom";
import FooterImage from "../assets/FooterImage.png";
function Footer() {
  return (
    <footer className="bg-bgBlue text-black ">
      <div className="  flex-col lg:flex-row py-8 relative container flex  mx-auto px-[4%] md:py-24  md:gap-10 gap-0">
        <div className="lg:w-4/12 font-medium">
          <img src={FooterImage} alt="" />
          <p className="text-lg">
            CodeX is a vibrant community fueling innovation, collaboration, and
            creativity. We are a diverse group united by our passion for
            problem-solving and the relentless pursuit of excellence. CodeX
            represents our love for finding solutions using various tools and
            techniques, beyond just coding.
          </p>
          <div className="flex gap-2 mt-2">
            <p>Follow Us</p>
            <a href="#">
              <img src={Facebook} alt="" />
            </a>
            <a href="#">
              <img src={Instagram} alt="" />
            </a>
            <a href="#">
              <img src={Twitter} alt="" />
            </a>
            <a href="#">
              <img src={LinkedIn} alt="" />
            </a>
          </div>
        </div>
        <div className="lg:w-4/12 mt-4 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className=" md:p-4">
              <p className="font-semibold mb-2 text-2xl">Navigation</p>
              <ul className="flex flex-col gap-2">
                <Link to="/about" className="font-semibold">
                  Home
                </Link>
                <Link to="/about" className="font-semibold">
                  About us
                </Link>
                <Link to="/about" className="font-semibold">
                  Blog
                </Link>
                <Link to="/about" className="font-semibold">
                  Features
                </Link>
              </ul>
            </div>
            <div className=" md:p-4">
              <p className="font-semibold mb-2 text-2xl"> Contact us</p>
              <div className=" gap-3 my-2 flex items-center">
                <SMS />
                {/* Add your SVG icon here */}

                <a href="mailto:CodeX@mail.com" className="font-semibold">
                  CodeX@mail.com
                </a>
              </div>
              <div className=" gap-3 flex items-center">
                <Call />
                {/* Add your SVG icon here */}

                <a href="tel:+8100000000" className="font-semibold">
                  08100000000
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-4/12  md:p-4 my-5 md:my-0 flex flex-col">
          <p className="font-semibold mb-2 text-2xl">NewsLetter</p>
          {/* Add your newsletter form code here */}
          <p className="mt-2 font-medium"> Join our newsletter to get our latest news </p>
          <div className="flex mt-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="mr-4 p-2 box-border md:w-auto  w-3/4 outline-none border-none rounded-lg"
            />
            <Link className="rounded-lg text-white hover:bg-red-700 bg-primaryBlack px-5 py-2  w-fit md:mx-0 mx-auto">
              Join Codex
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
