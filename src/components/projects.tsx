import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  const Projects = [
    {
      Name: "Chatz",
      Skills: ["React", "HTML", "SCSS", "JavaScript","TypeScript"],
      Link: "https://gsaber.github.io/chat-app/#/register",
      Code:"https://github.com/GSaber/chat-app",
      Image: require("../assets/images/coding.png"),
      Description:
        "A real-time chat application that allow u to create an account and search for an existant user and be able to have a conversation with the ability to send photos",
    },
    {
      Name: "Books Library",
      Skills: ["React", "HTML", "CSS3", "JavaScript","TypeScript"],
      Link: "https://gsaber.github.io/Books-Library/",
      Code:"https://github.com/GSaber/Books-Library",
      Image: require("../assets/images/coding.png"),
      Description:
        "A mini project that allow u to add books to your personal library, and select the book from your personal library to read",
    },
    {
      Name: "Kidz School",
      Skills: ["Swift3", "Xcode", "JavaScript", "AndroidStudio"],
      Link: "",
      Image: require("../assets/images/coding.png"),
      Description:
        "Assembled and lead a team of 8 developers to create core features and integrate third party APIs. Implemented CI/CD pipeline with Typescript type-checking, database migration, code linting and preview deploys.",
    },
    {
      Name: "Pet-vet",
      Skills: [
        "Node",
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "Hooks",
      ],
      Link: "",
      Image: require("../assets/images/coding.png"),
      Description:
        "Assembled and lead a team of 8 developers to create core features and integrate third party APIs. Implemented CI/CD pipeline with Typescript type-checking, database migration, code linting and preview deploys.",
    },
  ];
  return (
    <motion.section
      ref={targetRef}
      id="projects"
      className="sticky max-[800px]:px-5"
      style={{ opacity, scale }}
    >
      <motion.h1 className="group  text-5xl pl-96 py-16 max-[800px]:pl-8">
        <div className="translate-x-2 relative ">
          <div className="  bg-teal-400 w-52 h-8   transition duration-1000 group-hover:scale-x-50"></div>
          <div className="absolute -top-3">Projects</div>
        </div>
      </motion.h1>
      {Projects.map((project, i) => (
        <motion.div
          key={i}
          className="flex items-center  justify-center p-20 max-[800px]:py-2 max-[800px]:mb-40 max-[800px]:flex-col-reverse w-2/3 mx-auto  max-[800px]:w-full max-[800px]:px-4"
        >
          <div className="flex flex-col w-[500px]  max-[800px]:w-full  max-[800px]:pt-0">
            <h1 className="text-6xl py-8 ">{project.Name}</h1>
            <div className=" flex flex-wrap gap-2  ">
              {project.Skills.map((skill, i) => (
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, delay: i * 0.2 },
                  }}
                  key={i}
                  className="bg-teal-400 text-black text-xl p-2 font-semibold dark:text-white max-[800px]:text-base"
                >
                  {skill}
                </motion.p>
              ))}
            </div>
            <div className="mt-140 ">
              {project.Link? <>
              
              <div className="border-4 mt-16 border-black w-60 max-[800px]:w-1/2 text-center dark:border-white">
                <div className="bg-teal-400 text-2xl max-[800px]:text-lg  font-bold  py-6 max-[800px]:py-4 -translate-x-4 -translate-y-4 transition duration-500  hover:translate-x-0 hover:translate-y-0">
                  <a href={project.Link} target="_blank" rel="noreferrer">View Project</a>
                </div>
              </div>
              </> : "" }
              <div className="border-4 mt-16 border-black w-60 max-[800px]:w-1/2 text-center dark:border-white">
                <div className="bg-teal-400 text-2xl max-[800px]:text-lg  font-bold  py-6 max-[800px]:py-4 -translate-x-4 -translate-y-4 transition duration-500  hover:translate-x-0 hover:translate-y-0">
                  <a href={project.Code} target="_blank" rel="noreferrer">View Code</a>
                </div>
              </div>
              <p className="text-xl max-[800px]:text-base py-5  leading-10 text-gray-500 dark:text-white">
                {project.Description}
              </p>
            </div>
          </div>
          <img loading="lazy" width={500} src={project.Image} alt="" />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Projects;
