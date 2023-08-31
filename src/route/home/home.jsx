import FeaturedBlogs from "../../component/featured-blogs-section";
import HeroSection from "../../component/hero-section.component";
import NavigationComponent from "../../component/navigation.component";
import OurKeyFeatures from "../../component/our-key-features.component";
import About from "../../component/About";
import Why from "../../component/Home/Why";
import Footer from "../../component/Footer";
const HomePage = () => {
    return<>
        <div className="bg-primaryWhite">
        <NavigationComponent />
        <HeroSection />
        <About/>
        <OurKeyFeatures />
        <FeaturedBlogs />
        <Footer/>
        </div>
    </>
}

export default HomePage;