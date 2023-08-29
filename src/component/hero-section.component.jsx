import { Link } from "react-router-dom";
import {ReactComponent as HeroSVG} from "../assets/hero-section.svg"
const HeroSection = () => {
    return <>
        <section id="hero">
            <div className="container mx-auto bg-primaryWhite flex flex-col space-y-0 md:flex-row px-[4%] py-[5rem] md:space-x-2">
                <div className="basis-1/2 flex-1 justify-center flex flex-col space-y-6">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="font-bold text-5xl">Welcome to CodeX:</h2>
                        <h3 className="font-bold text-3xl">Where Innovation Thrives and Collaboration Knows No Bounds!</h3>
                    </div>
                    <p className="text-lg text-center md:text-left">Unlock the power of creativity, technology, and teamwork as you join our vibrant community of forward-thinking professionals from diverse backgrounds. At codeX, we believe that when like-minded individuals unit, the possibilities are limitless.</p>
                    <div className="text-center md:text-left">
                    <Link className="rounded-lg text-white bg-primaryBlack px-4 py-2 inline-block w-auto">Join CodeX</Link>
                    </div>
                </div>
                <div className="basis-1/2 flex-1">
                    <HeroSVG className="inline-block w-full"/>
                </div>
            </div>
        </section>
    </>
}

export default HeroSection;