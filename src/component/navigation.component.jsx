import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import {ReactComponent as CodeXLogoSVG} from "../assets/codex-logo.svg";
import {ReactComponent as HamburgerMenuIconSVG} from "../assets/hamburger-menu-icon.svg";
import {ReactComponent as CloseMenuIconSVG} from "../assets/close-menu-icon.svg";
import JoinCodexComponent from "./join-codex-component";
import { useState } from "react";
import NavLinksSmallScreenComponent from "./nav-links-small-screen.component";

const NavigationComponent = ({openCloseMenu, handleOpenCloseMenu}) => {
    
    // You should make the container fixed so it won't be scorllable. I dont 'know y it's transparent
    return <>
        <nav className="relative top-0 left-0 w-full z-10 bg-primaryWhite shadow-md ring-offset-2 mx-auto px-[4%] py-4">
            <div className="flex row justify-between h-full w-full items-center">
                <div className="logo">
                    <CodeXLogoSVG />
                </div>
                <div className="hidden md:flex">
                    <ul className="flex space-x-4">
                        <NavLink to="/"  className={({isActive}) => {
                            return (
                                isActive ? "font-bold text-lg relative after:bg-primaryBlack after:absolute after:w-[48%] after:py-[0.09rem] after:top-6 after:left-4 self-center": "self-center "
                            )
                        }}>Home</NavLink>
                        <NavHashLink to="#about-us" smooth>About Us</NavHashLink>
                        <NavHashLink to="#blog" smooth >Blog</NavHashLink>
                    </ul>
                </div>
                <div className="hidden md:flex">
                <JoinCodexComponent />
                </div>
                <div className="relative md:hidden" onClick={handleOpenCloseMenu}>
                    <HamburgerMenuIconSVG />
                </div>
            </div>
        </nav>
    </>
}

export default NavigationComponent;