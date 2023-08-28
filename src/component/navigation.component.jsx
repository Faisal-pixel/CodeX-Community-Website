import { Link, NavLink } from "react-router-dom";

const NavigationComponent = () => {
    return <>
        <div className="container bg-primaryWhite shadow-md">
        <div className="flex row justify-between items-center">
            <div className="logo">

            </div>
            <div>
                <ul>
                    <NavLink>Home</NavLink>
                    <NavLink>About Us</NavLink>
                    <NavLink>Blog</NavLink>
                </ul>
            </div>
            <Link className="rounded-lg text-white">Join Codex</Link>
        </div>
    </div>
    </>
}

export default NavigationComponent;