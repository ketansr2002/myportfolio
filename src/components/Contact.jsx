import { CONTACT } from "../constants";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="mt-20 mb-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="  text-center tracking-tighter">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-3"
        >
          <CiLocationOn className="text-xl font-medium" />
          <p className="my-4">{CONTACT.address}</p>
        </motion.div>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a className="border-b " href={`mailto:${CONTACT.email}`}>
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
