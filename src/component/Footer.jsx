import React from "react";
import { ReactComponent as SMS } from "../assets/sms.svg";
import { ReactComponentElement as Call } from "../assets/call.svg";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white ">
      <div className="  flex-col lg:flex-row py-8 relative container flex md:flex-row mx-auto px-[4%] md:py-24  md:gap-10 gap-0">
        <div className="lg:w-1/2">
          <p className="text-lg">Basics about us and the company.</p>
        </div>
        <div className="lg:w-1/2 mt-4 lg:mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4">
              <p>Navigation</p>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Blog</li>
                <li>Features</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-4">
              <p>Contact us</p>
              <div className="bg-gray-800 gap-3 flex items-center">
                <SMS/>
                  {/* Add your SVG icon here */}
             
                <p>Item 1</p>
              </div>
            </div>
            <div className="bg-gray-800 p-4">
              <p>Grid 3 content with newsletter form</p>
              {/* Add your newsletter form code here */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
