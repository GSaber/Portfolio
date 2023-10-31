import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Skills = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "HTML5",
    "CSS3",
    "SASS",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Git",
    "Github",
  ];
  return (
    <motion.section
      className="sticky max-[800px]:px-5"
      ref={targetRef}
      style={{ opacity, scale }}
      id="skills"
    >
      <h1 className="group text-5xl px-6 mb-24 pl-96  max-[800px]:pl-2">
        <div className="translate-x-2  ">
          <div className="  bg-teal-400 w-52 h-8   transition duration-1000 group-hover:scale-x-50"></div>
          <div className="absolute -top-3 ">My Skills</div>
        </div>
      </h1>
      <motion.div className=" text-center w-full  flex flex-row max-[800px]:flex-col-reverse items-center justify-center">
        <div className="flex  justify-center  max-[800px]:flex-col max-[800px]:px-4">
          <img
            loading="lazy"
            width={500}
            src={require("../assets/images/dev-ed-wave.png")}
            alt=""
          />
          <div className="flex flex-col w-[700px]  max-[800px]:w-full  max-[800px]:pt-10">
            <div className=" flex flex-wrap gap-2  ">
              {skills.map((skill, i) => (
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 1, delay: i * 0.2 },
                  }}
                  key={i}
                  className="bg-teal-400 text-black text-xl p-2 font-semibold dark:text-white  max-[800px]:text-lg "
                >
                  {skill}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { duration: 1 },
              }}
            >
              <p className="text-3xl font-bold py-8  max-[800px]:text-2xl">
                I love building stuff 📱
              </p>
              <p className="text-xl py-5  leading-8 text-gray-800 dark:text-white  max-[800px]:text-base">
                I started playing with computers when I was 11 years-old. Since
                then I have been tinkering with all sorts of technologies that
                in some way or another led me to work on music, photography,
                sound engineering, electric engineering, automation, video
                production, feature film post-production, VR games, and 3D
                sound.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
