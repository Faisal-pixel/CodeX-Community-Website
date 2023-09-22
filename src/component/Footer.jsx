import React from 'react';
import {ReactComponent as CodeXLogoSVG} from "../assets/codex-logo.svg";
import {ReactComponent as MailLogoSVG} from "../assets/mail-icon.svg";
import {ReactComponent as TelephoneLogoSVG} from "../assets/telephone-icon.svg";
import {ReactComponent as FacebookFooterIconSVG} from "../assets/facebook-footer-icon.svg";
import {ReactComponent as TwitterFooterIconSVG} from "../assets/twitter-footer-icon.svg";
import {ReactComponent as InstagramFooterIconSVG} from "../assets/instagram-footer-icon.svg";
import {ReactComponent as LinkedInFooterIconSVG} from "../assets/linkedin-footer-icon.svg";
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className='flex-col justify-center items-center bg-bgBlue w-full h-full'>
        <div className='px-[15%] py-[4%] flex flex-col space-y-12 xl:space-y-0 xl:space-x-14 lg:px-[7%] xl:flex-row'>
            <div className='space-y-7 text-center lg:text-left lg:space-y-3'>
                <div className='flex justify-center items-center lg:items-start lg:justify-start'>
                    <CodeXLogoSVG />
                </div>
                <p className=''>
                    CodeX is a vibrant community fueling innovation, collaboration, and creativity. We are a diverse group united by our passion for problem-solving and the relentless pursuit of excellence. CodeX represents our love for finding solutions using various tools and techniques, beyond just coding.
                </p>
                <div className='flex space-x-4 items-center justify-center lg:items-start lg:justify-start'>
                    <span className='self-center'>Follow us</span>
                    <div className='space-x-3'>
                        <Link><TwitterFooterIconSVG className='inline-block border border-bgBlue hover:border-black hover:rounded-full'/></Link>
                        <Link><InstagramFooterIconSVG className='inline-block border border-bgBlue hover:border-black hover:rounded-full'/></Link>
                        <Link><LinkedInFooterIconSVG className='inline-block border border-bgBlue hover:border-black hover:rounded-full'/></Link>
                    </div>
                </div>
            </div>
            
            
            <div className='space-y-3 lg:hidden'>
                <p className='text-center text-lg font-bold'>Navigations</p>
                <div className='flex flex-row items-center justify-between'>
                    <Link className='hover:text-white hover:underline'>Home</Link>
                    <Link className='hover:text-white hover:underline'>About us</Link>
                    <Link className='hover:text-white hover:underline'>Blog</Link>
                    <Link className='hover:text-white hover:underline'>Features</Link>
                </div>
            </div>

            <div className='space-y-3 lg:hidden'>
                <p className='text-center font-bold text-lg'>Contact us</p>
                <div className='flex flex-col space-y-2'>
                    <p className='flex space-x-5 justify-center items-center'><TelephoneLogoSVG className='inline' /> <span>09035771048</span></p>
                    <p className='flex space-x-2 justify-center items-center'><MailLogoSVG className='inline'/> <span>codexcommunity2023@gmail.com</span></p>
                </div>
            </div>

            <div className='space-y-3 text-center lg:hidden'>
                <p>Newsletter</p>
                <p>Join our newsletter to get our latest news</p>
                <div className='flex flex-col space-y-2'>
                    <form className='flex flex-col sm:items-center justify-center space-y-2 sm:space-y-0 sm:space-x-1 sm:flex-row'>
                        <input type='email' placeholder='Email' className='px-2 py-1 bg-transparent border border-black rounded-md placeholder:text-black'/>
                        <button type='submit' className='rounded-md bg-black text-white px-3 py-1'> Submit</button>
                    </form>
                </div>
            </div>

            {/* Large ScreenDesign for footer */}

            <div className='hidden space-x-6 justify-between lg:flex'>
                <div className='space-y-5'>
                    <p className='text-xl'>Navigation</p>
                    <div className='space-y-2 flex flex-col'>
                        <NavHashLink to="#" smooth className='hover:text-white hover:underline'>Home</NavHashLink>
                        <Link className='hover:text-white hover:underline'>About us</Link>
                        <Link className='hover:text-white hover:underline'>Blog</Link>
                        <Link className='hover:text-white hover:underline'>Features</Link>
                    </div>
                </div>
                <div className='space-y-5'>
                    <p className='text-xl'>Contact us</p>
                    <div className='flex flex-col space-y-2'>
                        <p className='flex space-x-2'><TelephoneLogoSVG className='inline' /> <span>09035771048</span></p>
                        <p className='flex space-x-2'><MailLogoSVG className='inline'/> <span>codexcommunity2023@gmail.com</span></p>
                    </div>
                </div>
                <div className='space-y-5'>
                    <p className='text-xl'>Newsletter</p>
                    <p>Join our newsletter to get our latest news</p>
                    <div className='flex flex-col space-y-2'>
                        <form className='flex space-x-1'>
                            <input type='email' placeholder='Email' className='px-2 py-1 bg-transparent border border-black rounded-md placeholder:text-black focus:outline-none'/>
                            <button type='submit' className='rounded-md bg-black text-white px-3 py-1 border-2 border-primaryBlack hover:bg-white hover:text-primaryBlack'> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#9E9D9E] h-[1.5px] w-full'></div>
        <div className='w-full py-[5%] px-[7%] text-center flex flex-col space-y-2 justify-between md:py-[2%] md:flex-row'>
            <p><span className='ml-1'>2023</span> CodeX. All right reserved</p>
            <p className='space-x-4'><span className=''>Terms of service</span> <span>Privacy policy</span></p>
        </div>
    </footer>
  )
}

export default Footer