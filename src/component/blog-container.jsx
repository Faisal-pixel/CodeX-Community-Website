import blogImg from "../assets/blog-img.png";
import {ReactComponent as BlogDateClockSVG} from "../assets/blog-date-clock.svg";
import {ReactComponent as BlogViewEyesSVG} from "../assets/blog-view-eyes.svg";
import {ReactComponent as BlogCommentIconSVG} from "../assets/blog-comment-icon.svg";
import {ReactComponent as ReadMoreRightArrowIconIconSVG} from "../assets/read-more-right-arrow-blog-icon.svg";
import { Link } from "react-router-dom";
const BlogContainer = ({blogHeading, blogParagraph}) => {
    return <>
        <div className="flex flex-col h-auto justify-between space-y-7 pb-5 rounded-lg border-2 border-[#CCCCCC] lg:basis-[32.1%]">
            <div className="h-[75%] space-y-3">
                <div className="overflow-clip">
                    <img src={blogImg} alt="blog_image" className="w-full h-full"/>
                </div>
                <h3 className="text-lg font-bold text-center px-3 md:text-left">{blogHeading}</h3>
                <p className="text-center px-3 md:text-left">{blogParagraph}</p>
                <div className="flex flex-wrap md:justify-start justify-between space-x-0 md:space-x-5 px-3">
                    <div className="flex space-x-1"><BlogDateClockSVG className="self-center"/> <span className="text-[#9E9D9E]">24th July, 2023</span></div>
                    <div className="flex space-x-1"><BlogViewEyesSVG className="self-center"/> <span className="text-[#9E9D9E]">40 views</span></div>
                    <div className="flex space-x-1"><BlogCommentIconSVG className="self-center"/> <span className="text-[#9E9D9E]">12 Comments</span></div>
                </div>
            </div>
            <div className=" flex items-end justify-end  px-3">
                <Link className="font-bold text-lg">Read More <ReadMoreRightArrowIconIconSVG className="inline self-center ml-1" /></Link>
            </div>
        </div>
    </>
}

export default BlogContainer;