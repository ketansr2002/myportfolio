import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h3 className="mx-2 w-20 text-xl font-medium">KSR</h3>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ketan-singh-rajpoot-6b9150202/"
          target="blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/ketansr2002/" target="blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/ketan_singh_rajpoot/" target="blank">
          <FaInstagram />
        </a>
        <a href="https://x.com/RajpootKetan" target="blank">
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
