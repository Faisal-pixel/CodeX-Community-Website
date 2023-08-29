import FeaturedBlogs from "../../component/featured-blogs-section";
import HeroSection from "../../component/hero-section.component";
import NavigationComponent from "../../component/navigation.component";
import OurKeyFeatures from "../../component/our-key-features.component";

const HomePage = () => {
    return<>
        <div className="bg-primaryWhite">
        <NavigationComponent />
        <HeroSection />
        <OurKeyFeatures />
        <FeaturedBlogs />
        </div>
    </>
}

export default HomePage;