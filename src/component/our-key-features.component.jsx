import { ReactComponent as MultidisciplinaryCollaborationSVG } from "../assets/multidisciplinary-collaboration.svg";
import { ReactComponent as ThoughtLeadershipAndLearningSVG } from "../assets/thought-leadership-and-learning.svg";
import { ReactComponent as NetworkingAndConnectionsSVG } from "../assets/networking-and-connections.svg";
import { ReactComponent as CollaborativeProjectsAndHackathonsSVG } from "../assets/collaborative-projects-and-hackathons.svg";
import { ReactComponent as InclusiveAndSupportiveEnvironmentSVG } from "../assets/inclusive-and-supportive-environment.svg";
import { ReactComponent as OngoingLearningAndDevelopmentSVG } from "../assets/ongoing-learning-and-development.svg";
const OurKeyFeatures = () => {
    return <>
        <section id="key-features">
    	    <div className="container mx-auto bg-primaryWhite flex flex-col space-y-20 px-[7%] py-[3rem]">
                <h2 className="font-bold text-4xl text-center">Our Key Features</h2>
                {/* Flex Container */}
                <div className="flex flex-wrap space-y-4 md:space-y-0">
                    <div className="flex flex-col space-y-2 flex-1 md:basis-1/2 lg:basis-1/3 md:py-5 px-3">
                        <div className="flex items-center justify-center md:block">
                            <MultidisciplinaryCollaborationSVG />
                        </div>
                        <h3 className="text-lg font-bold text-center md:text-left">Multidisciplinary Collaboration</h3>
                        <p className="text-center md:text-left pr-1">CodeX goes beyond boundaries and welcomes professionals from diverse fields, including coding, content writing, data analysis, product design, and more.</p>
                    </div>
                    <div className="flex flex-col space-y-2 flex-1 md:basis-1/2 lg:basis-1/3 md:py-5 px-3">
                        <div className="flex items-center justify-center md:block">
                            <ThoughtLeadershipAndLearningSVG />
                        </div>
                        <h3 className="text-lg font-bold text-center md:text-left">Thought Leadership and Learning</h3>
                        <p className="text-center md:text-left pr-1">CodeX hosts a diverse range of thought leaders and experts who share their insights, knowledge, and experiences through articles, webinars, and events.</p>
                    </div>
                    <div className="flex flex-col space-y-2 flex-1 md:basis-1/2 lg:basis-1/3 md:py-5 px-3">
                        <div className="flex items-center justify-center md:block">
                            <NetworkingAndConnectionsSVG />
                        </div>
                        <h3 className="text-lg font-bold text-center md:text-left">Networking and Connections</h3>
                        <p className="text-center md:text-left pr-1">CodeX offers a powerful networking platform, connecting you with like-minded individuals who share your passion for innovation and collaboration.</p>
                    </div>
                    <div className="flex flex-col space-y-2 flex-1 md:basis-1/2 lg:basis-1/3 md:py-5 px-3">
                        <div className="flex items-center justify-center md:block">
                            <CollaborativeProjectsAndHackathonsSVG />
                        </div>
                        <h3 className="text-lg font-bold text-center md:text-left">Collaborative Projects and Hackathons</h3>
                        <p className="text-center md:text-left pr-1">CodeX cultivates a collaborative atmosphere through a range of project-driven initiatives and hackathons, uniting professionals possessing diverse skills and knowledge to address practical issues and devise inventive prototypes. Additionally, CodeX offers open-source projects, fostering opportunities for contributions and participation.</p>
                    </div>
                    <div className="flex flex-col space-y-2 flex-1 md:basis-1/2 lg:basis-1/3 md:py-5 px-3">
                        <div className="flex items-center justify-center md:block">
                            <InclusiveAndSupportiveEnvironmentSVG />
                        </div>
                        <h3 className="text-lg font-bold text-center md:text-left">Inclusive and Supportive Environment</h3>
                        <p className="text-center md:text-left pr-1">We foster an inclusive community where everyone's voice is valued and respected. CodeX provides a safe space for professionals to share their insights, learn from one another, and collaborate without fear of judgment.</p>
                    </div>
                    <div className="flex flex-col space-y-2 flex-1 md:basis-1/2 lg:basis-1/3 md:py-5 px-3">
                        <div className="flex items-center justify-center md:block">
                            <OngoingLearningAndDevelopmentSVG />
                        </div>
                        <h3 className="text-lg font-bold text-center md:text-left">Ongoing Learning and Development</h3>
                        <p className="text-center md:text-left pr-1"> CodeX supports continuous learning and professional development. We provide resources, recommendations, and access to relevant training programs to help you enhance your skills, stay updated with industry trends, and further your career growth.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default OurKeyFeatures;