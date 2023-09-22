import BlogContainer from "./blog-container";

const FeaturedBlogs = () => {
    return <>
        <div id="blog" className="container mx-auto bg-primaryWhite flex flex-col space-y-20 px-[15%] py-[3rem] lg:px-[7%]">
            <h2 className="font-bold text-4xl text-center">Featured Blogs</h2>
            <div className="flex flex-row lg:space-x-5 lg:space-y-2 space-y-4 flex-wrap lg:flex-nowrap">
                <BlogContainer blogHeading={"How to mix schooling with tech and excel"} blogParagraph={"There are several things one can do like managing ones time in a way that the one would not spend time on irrelevant things in ...."} />
                <BlogContainer blogHeading={"How to mix schooling with tech and excel"} blogParagraph={"There are several things one can do like managing ones time in a way that the one would not spend time on irrelevant things in ...."} />
                <BlogContainer blogHeading={"How to mix schooling with tech and excel"} blogParagraph={"There are several things one can do like managing ones time in a way that the one would not spend time on irrelevant things in ...."} />
            </div>
        </div>
    </>
}

export default FeaturedBlogs;