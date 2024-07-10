import { HERO_CONTENT } from "../constants/index.js";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-fill lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight  lg:mt-16 lg:text-8xl"
            >
              KETAN SINGH RAJPOOT
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-slate-400 via-slate-600 to-purple-800 bg-clip-text tracking-tight text-3xl text-transparent "
            >
              Full Stack / Machine Learning
            </motion.span>
            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 "
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="mt-10 h-90 w-80 rounded-lg object-cover  opacity-50 mix-blend-lighten"
              src="src\assets\ketan_pic.jpg"
              alt="myimage"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
