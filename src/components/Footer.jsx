import { FaFacebook, FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 py-10">
      <div className="footer w-10/12 md:container xl:w-10/12 mx-auto py-10">
        <div className="self-center col-span-2 lg:col-span-1">
          <img src="/assets/logo.png" alt="" className="w-14 md:w-16" />
          <h2 className="text-2xl md:text-4xl font-bold">JobBees</h2>
          <p className="text-black/80 font-medium">
            Providing reliable service since 2022
          </p>
        </div>
        <nav>
          <h6 className="text-base md:text-lg text-black/80 uppercase font-bold">
            Services
          </h6>
          <a className="link-hover text-black/80  hover:text-light-primary font-medium">
            Branding
          </a>
          <a className="link-hover text-black/80 hover:text-light-primary font-medium">
            Design
          </a>
          <a className="link-hover text-black/80 hover:text-light-primary font-medium">
            Marketing
          </a>
        </nav>
        <nav>
          <h6 className="text-base md:text-lg text-black/80 uppercase  font-bold">
            Company
          </h6>
          <a className="text-black/80 link-hover  hover:text-light-primary font-medium">
            About us
          </a>
          <Link
            to="/contact"
            className="link-hover text-black/80 hover:text-light-primary font-medium"
          >
            Contact
          </Link>
          <a className="link-hover text-black/80 hover:text-light-primary font-medium">
            Jobs
          </a>
        </nav>
        <nav>
          <h6 className="text-base md:text-lg text-black/80 uppercase  font-bold">
            Legal
          </h6>
          <a className="link-hover text-black/80 hover:text-light-primary font-medium">
            Terms of use
          </a>
          <a className=" link-hover text-black/80 hover:text-light-primary font-medium">
            Privacy policy
          </a>
          <a className="link-hover text-black/80 hover:text-light-primary font-medium">
            Cookie policy
          </a>
        </nav>
      </div>
      <div className="w-11/12 md:container xl:w-10/12 mx-auto">
        <div className="border border-t-1 border-black/30 my-10 w-full"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-black/80 font-medium">
            Copyright © {new Date().getFullYear()} - All right reserved by
            JobBees.
          </p>
          <div className="flex gap-4 mt-5 md:mt-0">
            <a
              href="https://www.facebook.com/profile.php?id=100089745247384"
              target="_blank"
            >
              <FaFacebook className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
            </a>
            <a href="https://github.com/fatemaDiba" target="_blank">
              <FaGithub className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer"></FaGithub>
            </a>
            <a
              href="https://www.linkedin.com/in/fatema-tabassum-diba/"
              target="_blank"
            >
              <FaLinkedin className="text-3xl hover:-translate-y-1 transition-transform duration-500 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
