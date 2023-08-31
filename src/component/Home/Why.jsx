import React from "react";
import { Link } from "react-router-dom";
import WhyLogo from "../../assets/rafiki.png";
import { why } from "../../data";

function Why() {
  return (
    <section className="bg-bgBlue">
      <h3 className="font-bold text-5xl text-center md:pt-24 pt-8 pb-10">
        Why join CodeX
      </h3>

      <div className="relative container flex md:flex-row flex-col mx-auto px-[4%] md:pb-24 pb-8  md:gap-10 gap-0">
        <div className="md:w-3/6 h-100 w-full ">
          <img src={WhyLogo} alt="" className="w-full h-full object-none" />
        </div>

        <div className=" flex flex-col gap-10 justify-between md:w-3/6 w-full md:text-start text-center">
          <ul className="md:list-disc list-none mx-4 md:mx-0">
            {why.map((element,index) => {
              return (
                <div key={index}>
                  <li className="text-2xl text-black font-bold">
                    {element.title}
                  </li>
                  <p className="my-2 text-textGrey">{element.leading}</p>
                </div>
              );
            })}
          </ul>
          {/* <Link className="rounded-lg text-white hover:bg-red-700 bg-primaryBlack px-5 py-2  w-fit md:mx-0 mx-auto">
            Join Codex
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export default Why;
