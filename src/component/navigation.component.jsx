import { Link, NavLink } from "react-router-dom";
import {ReactComponent as CodeXLogoSVG} from "../assets/codex-logo.svg"

const NavigationComponent = () => {
    // You should make the container fixed so it won't be scorllable. I dont 'know y it's transparent
    return (
      <>
        <nav className="fixed top-0 left-0 w-full z-10 bg-primaryWhite shadow-md ring-offset-2 mx-auto px-[4%] py-4">
          <div className="flex row justify-between items-center">
            <div className="logo">
              <CodeXLogoSVG />
            </div>
            <div className="hidden md:flex">
              <ul className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    return isActive
                      ? "font-bold text-lg relative after:bg-primaryBlack after:absolute after:w-[48%] after:py-[0.09rem] after:top-6 after:left-4 self-center"
                      : "self-center ";
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="about-us"
                  className={({ isActive }) => {
                    return isActive
                      ? "font-bold text-lg relative after:bg-primaryBlack after:absolute after:w-[48%] after:py-[0.09rem] after:top-6 after:left-4 self-center"
                      : "self-center ";
                  }}
                >
                  About Us
                </NavLink>
                <NavLink
                  to="blog"
                  className={({ isActive }) => {
                    return isActive
                      ? "font-bold text-lg relative after:bg-primaryBlack after:absolute after:w-[48%] after:py-[0.09rem] after:top-6 after:left-4 self-center"
                      : "self-center ";
                  }}
                >
                  Blog
                </NavLink>
              </ul>
            </div>
            <Link className="rounded-lg text-white bg-primaryBlack px-5 py-2">
              Join Codex
            </Link>
          </div>
        </nav>
      </>
    );
}

export default NavigationComponent;