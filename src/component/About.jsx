import React from "react";
import { Link } from "react-router-dom";
import CodexLogo from "../assets/codex_logo_black.png";
import JoinCodexComponent from "./join-codex-component";
function About() {
  return (
    <section id="about-us" className="bg-bgBlue">
      <div className="relative container flex md:flex-row flex-col mx-auto px-[4%] md:py-24 py-8  md:gap-10 gap-0">
        <div className="md:w-3/6 h-100 w-full ">
          <img src={CodexLogo} alt="" className="w-full h-full object-none" />
        </div>

        <div className=" flex flex-col gap-10 justify-between md:w-3/6 w-full md:text-start text-center">
          <h3 className="font-bold text-5xl">What is CodeX</h3>
          <p className="text-black leading-7  font-normal text-lg">
            CodeX is a vibrant community fueling innovation, collaboration, and
            creativity. We are a diverse group united by our passion for
            problem-solving and the relentless pursuit of excellence. CodeX
            represents our love for finding solutions using various tools and
            techniques, beyond just coding. <br />
            CodeX is a hub of creativity and innovation, where groundbreaking
            projects and advancements are nurtured through collaboration and
            mutual learning. By joining us, you become part of a movement that
            pushes the boundaries of what's possible. Together, we shape the
            future and leave an indelible mark on the world. <br /> Fill out our
            membership form to join our community, connect with like-minded
            individuals, and explore the potential of collaborative innovation.
            Join CodeX today and unleash your full potential in a supportive and
            dynamic environment.
          </p>
          <div>
            <JoinCodexComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
