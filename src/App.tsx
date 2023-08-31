import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { useState } from "react";
import "./assets/css/animation.css";
import Hero from "./components/hero";
import { motion } from "framer-motion";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Services from "./components/services";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <motion.div className={darkMode ? "dark" : ""}>
      <section className="fixed  w-full z-50 dark:text-white bg-white  dark:bg-gray-900 ">
        <motion.nav
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="p-10 flex items-center justify-between"
        >
          <h1 className="text-xl font-burtons max-[800px]:hidden">G.SABEUR</h1>
          <ul className="flex items-center max-[800px]:mx-auto gap-10">
            <li>
              <div
                className="switch"
                data-ison={darkMode}
                onClick={() => setDarkMode(!darkMode)}
              >
                <motion.div
                  className="handle flex justify-center items-center"
                  layout
                  transition={spring}
                >
                  {darkMode ? (
                    <BsSunFill className="cursor-pointer " />
                  ) : (
                    <BsFillMoonStarsFill className="cursor-pointer " />
                  )}
                </motion.div>
              </div>
            </li>
            <li>
              <div className="flex flex-col group text-center">
                <a href="#projects" className=" py-1 font-multi font-bold">
                  Projects
                </a>
                <div className="bg-teal-400  h-1"></div>
                <div className="bg-teal-400  h-1 transition duration-500   group-hover:translate-y-1"></div>
              </div>
            </li>
            <li>
              <div className="flex flex-col group text-center">
                <a href="#skills" className="py-1 font-multi font-bold">
                  Skills
                </a>
                <div className="bg-teal-400  h-1"></div>
                <div className="bg-teal-400  h-1 transition duration-500   group-hover:translate-y-1"></div>
              </div>
            </li>
          </ul>
        </motion.nav>
      </section>
      <motion.div className="relative bg-white  max-[800px]:px-0 max-[800px]:w-full dark:bg-gray-900 dark:text-white">
        <Hero />
        <Skills />
        <Projects />
        <Services />
        <section>
          <div className="bg-gray-900 text-white flex flex-row py-32 items-start justify-evenly max-[800px]:flex-col max-[800px]:px-6 ">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5 },
              }}
              className="flex flex-col"
            >
              <h2 className="text-4xl text-white font-semibold ">
                Saber Guenaoui
              </h2>
              <p className="text-gray-400 text-lg">
                © 2023, Built and designed by Saber Guenaoui
              </p>
            </motion.div>
            <div className="flex flex-col max-[800px]:py-8">
              <h2 className="text-2xl text-gray-400 font-bold">Links</h2>
              <div className="grid grid-cols-2 gap-4 py-2 text-2xl font-bold text-teal-400">
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1 },
                  }}
                  href="#about"
                >
                  About
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.25 },
                  }}
                  href="#projects"
                >
                  Projects
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  href="#skills"
                >
                  Skills
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 0.75 },
                  }}
                  href="#"
                >
                  Contact
                </motion.a>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl text-gray-400 font-bold ">
                Get in Touch
              </h2>
              <div>
                <div className="text-5xl flex gap-4 py-2">
                  <motion.a
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1 },
                    }}
                    href="#"
                  >
                    <AiFillLinkedin className="text-gray-400" />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, delay: 0.25 },
                    }}
                    href="#"
                  >
                    <AiFillGithub className="text-gray-400" />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1, delay: 0.5 },
                    }}
                    href="#"
                  >
                    <AiFillMail className="text-gray-400" />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}

export default App;
