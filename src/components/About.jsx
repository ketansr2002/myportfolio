import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="mt-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <a href="src\assets\ketanSinghResume.pdf" download>
        <h6 className="mb-10 mt-4 text-center text-xl">
          <span className="text-neutral-500 flex items-center justify-center">
            <IoMdDownload className="text-slate-50 mr-2" /> My resume
          </span>
        </h6>
      </a>

      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-10">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center"
          >
            <img
              className="rounded-2xl h-45 w-48"
              src="src\assets\about.jpg"
              alt="about image"
            />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
