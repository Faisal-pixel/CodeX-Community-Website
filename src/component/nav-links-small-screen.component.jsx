import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import JoinCodexComponent from './join-codex-component';

import {ReactComponent as CloseMenuIconSVG} from "../assets/close-menu-icon.svg";

const NavLinksSmallScreenComponent = ({openCloseMenu, handleOpenCloseMenu}) => {

  return (
    <div className={`fixed z-20 w-full h-full bg-white top-0 left-0 flex justify-center items-center transition-all duration-500 ${openCloseMenu ? "translate-x-0" : "translate-x-[100%]"}`}>
        <CloseMenuIconSVG onClick={handleOpenCloseMenu} className="absolute top-2 right-2" />
        <ul className='flex flex-col space-y-7'>
            <li>
                <NavLink to="/"  className={({isActive}) => {
                    return (
                            isActive ? "font-bold text-lg relative after:bg-primaryBlack after:absolute after:w-[48%] after:py-[0.09rem] after:top-6 after:left-4 self-center": "self-center "
                        )
                    }}>Home</NavLink>
            </li>
            <li><NavHashLink to="#about-us" onClick={handleOpenCloseMenu}  smooth>About Us</NavHashLink></li>
            <li><NavHashLink onClick={handleOpenCloseMenu} to="#blog" smooth >Blog</NavHashLink></li>
            <li>
                <div className="">
                    <JoinCodexComponent />
                </div>
            </li>
        </ul>
    </div>
  )
}

export default NavLinksSmallScreenComponent;