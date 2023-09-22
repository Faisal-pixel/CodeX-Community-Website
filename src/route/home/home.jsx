import FeaturedBlogs from "../../component/featured-blogs-section";
import HeroSection from "../../component/hero-section.component";
import NavigationComponent from "../../component/navigation.component";
import OurKeyFeatures from "../../component/our-key-features.component";
import About from "../../component/About";
import Footer from "../../component/Footer";
import NavLinksSmallScreenComponent from "../../component/nav-links-small-screen.component";
import { useState } from "react";
const HomePage = () => {
    const [openCloseMenu, setOpenCloseMenu] = useState(false);
    const handleOpenCloseMenu = () => {
        setOpenCloseMenu(!openCloseMenu)
    }
    return<>
        <div className="bg-primaryWhite">
        <NavLinksSmallScreenComponent openCloseMenu={openCloseMenu} handleOpenCloseMenu={handleOpenCloseMenu}/>
        <NavigationComponent openCloseMenu={openCloseMenu} handleOpenCloseMenu={handleOpenCloseMenu} />
        <HeroSection />
        <About/>
        <OurKeyFeatures />
        <FeaturedBlogs />
        <Footer />
        </div>
    </>
}

export default HomePage;