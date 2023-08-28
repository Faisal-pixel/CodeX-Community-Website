import { Link, NavLink } from "react-router-dom";
import {ReactComponent as CodeXLogoSVG} from "../assets/codex-logo.svg"

const NavigationComponent = () => {
    return <>
        <nav className="relative container bg-primaryWhite shadow-md mx-auto px-[4%] py-4">
            <div className="flex row justify-between items-center">
                <div className="logo">
                    <CodeXLogoSVG />
                </div>
                <div>
                    <ul>
                        <NavLink>Home</NavLink>
                        <NavLink>About Us</NavLink>
                        <NavLink>Blog</NavLink>
                    </ul>
                </div>
                <Link className="rounded-lg text-white bg-primaryBlack px-5 py-2">Join Codex</Link>
            </div>
        </nav>
    </>
}

export default NavigationComponent;