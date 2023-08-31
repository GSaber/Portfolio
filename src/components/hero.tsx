import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });
  return (
    <motion.section
      ref={targetRef}
      style={{ opacity }}
      className="relative h-screen"
      id="about"
    >
      <motion.div
        style={{ scale, position }}
        className="text-center h-[100vh] w-full  flex flex-row max-[800px]:flex-col-reverse items-center justify-center"
      >
        <div className="px-12">
          <h2 className="text-8xl text-teal-400 font-bold max-[800px]:text-6xl">
            Front-End React Developer
          </h2>
          <h3 className="text-4xl py-6">
            Hi, i'm <span className="text-teal-400">Saber Guenaoui</span>. A
            passionate Software Engineer
          </h3>
          <div className="text-5xl  flex justify-center gap-10 pt-6 text-gray-600">
            <a
              href="https://www.linkedin.com/in/saber-guenaoui/"
              target="_blank"
            >
              <AiFillLinkedin className="text-black dark:text-white" />
            </a>
            <a href="https://github.com/GSaber" target="_blank">
              <AiFillGithub className="text-black dark:text-white" />
            </a>
          </div>
        </div>

        <img
          width={400}
          className="moveCloud  invert  dark:invert-0 max-[1400px]:hidden"
          src={require("../assets/images/clouds2.png")}
          alt=""
        />
        <img
          width={250}
          className="moveCloud1 invert  dark:invert-0 max-[1400px]:hidden"
          src={require("../assets/images/clouds1.png")}
          alt=""
        />
        <img
          width={700}
          className="moveCloud2 invert  dark:invert-0 max-[1400px]:hidden"
          src={require("../assets/images/clouds2.png")}
          alt=""
        />
        <img
          width={700}
          className="moveCloud3 invert  dark:invert-0 max-[1400px]:hidden"
          src={require("../assets/images/clouds1.png")}
          alt=""
        />
        <img
          width={600}
          className="moveCloud5 invert  dark:invert-0 max-[1400px]:hidden"
          src={require("../assets/images/clouds4.png")}
          alt=""
        />
        <img
          width={300}
          className="moveCloud4 invert  dark:invert-0 max-[1400px]:hidden"
          src={require("../assets/images/clouds3.png")}
          alt=""
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
