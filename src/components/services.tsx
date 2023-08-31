import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
const Services = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity, scale }}
      className="mt-40 "
    >
      <div className="px-2 lg:px-72">
        <h1 className="group text-5xl max-[800px]:text-3xl  py-16 max-[800px]:px-0">
          <div className="translate-x-2 relative ">
            <div className="bg-teal-400 w-44 max-[800px]:w-48  h-8 max-[800px]:h-5 top-7 max-[800px]:top-5 absolute transition duration-1000 group-hover:scale-x-50"></div>
            <div className="absolute top-0">Services I Offer</div>
          </div>
        </h1>
        <p className=" text-xl p-5  leading-8 text-gray-800 dark:text-white max-[800px]:text-base">
          As a junior Front-End Developer. I possess an arsenal of skills in{" "}
          <span className="text-teal-400">HTML, CSS, JavaScript, React</span>.
          I'm excelling in desinging and mantaining responsives websites with
          smooth user experience
        </p>
      </div>
      <div className="lg:flex justify-center gap-16 px-10 max-[800px]:px-10">
        <div className="flex-1 text-center shadow-2xl dark:shadow-gray-700 p-8 rounded-xl my-10 transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-110 ">
          <img
            loading="lazy"
            className="mx-auto"
            width={100}
            height={100}
            src={require("../assets/images/code.png")}
            alt="code"
          />
          <h3 className="text-3xl font-bold py-8   dark:text-teal-400 ">
            Clean Code
          </h3>
          <p className="text-lg text-gray-500 font-semibold pb-2 dark:text-white max-[800px]:text-base">
            Creating smooth app with cleann code
          </p>
          <p className="text-lg text-gray-500 font-semibold pb-2 dark:text-white max-[800px]:text-base">
            Annotation
          </p>
          <p className="text-lg text-gray-500 font-semibold pb-2 dark:text-white max-[800px]:text-base">
            commentary
          </p>
        </div>
        <div className="flex-1 text-center shadow-2xl dark:shadow-gray-700 p-10 rounded-xl my-10 transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            loading="lazy"
            className="mx-auto"
            width={100}
            height={100}
            src={require("../assets/images/consulting.png")}
            alt="code"
          />
          <h3 className="text-3xl font-bold py-8  dark:text-teal-400">
            Clean Code
          </h3>
          <p className="text-lg text-gray-500 font-semibold pb-2 dark:text-white max-[800px]:text-base">
            Creating smooth app with cleann code
          </p>
          <p className="text-lg text-gray-500 font-semibold pb-2 dark:text-white max-[800px]:text-base">
            Annotation
          </p>
          <p className="text-lg text-gray-500 font-semibold pb-2 dark:text-white max-[800px]:text-base">
            commentary
          </p>
        </div>
        <div className="flex-1 text-center shadow-2xl dark:shadow-gray-700 p-10 rounded-xl my-10 transition duration-400 ease-in-out hover:-translate-y-1 hover:scale-110">
          <img
            loading="lazy"
            className="mx-auto"
            width={100}
            height={100}
            src={require("../assets/images/design.png")}
            alt="code"
          />
          <h3 className="text-3xl font-bold py-8  dark:text-teal-400">
            Clean Code
          </h3>
          <p className="text-lg text-gray-500 font-semibold pb-2 dark:text-white max-[800px]:text-base">
            Creating smooth app with cleann code
          </p>
          <p className="text-lg text-gray-500 font-semibold pb-2 dark:text-white max-[800px]:text-base">
            Annotation
          </p>
          <p className="text-lg text-gray-500 font-semibold pb-2 dark:text-white max-[800px]:text-base">
            commentary
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
