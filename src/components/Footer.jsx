import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="bg-Background lg:px-20 px-8 py-14">
        <div className="flex lg:flex-row flex-col justify-between gap-10 ">
          <section className="lg:w-2/4 w-full">
            <p className="font-dmSerif text-Creamm text-3xl pb-6">
              About Monica
            </p>
            <p className="text-Ash text-xl leading-8">
              With a passion for crafting compelling narratives and strategic
              marketing solutions, I'm a seasoned professional dedicated to
              driving business growth through innovative strategies. With over
              10 years of experience in the dynamic realm of marketing, I am an
              expert in understanding market trends, consumer behavior, and
              digital landscapes.
            </p>
          </section>
          <div className="flex lg:flex-row flex-col justify-between lg:w-2/4 w-full">
            <div className="lg:w-2/4 w-full lg:pb-0 pb-10">
              <p className="font-dmSerif text-Creamm text-3xl pb-6">
                Site Links
              </p>
              <ul className="text-Ash text-xl">
                <li className="pb-1">Home</li>
                <li className="pb-1">Service</li>
                <li className="pb-1">Journal</li>
                <li className="pb-1">About</li>
                <li className="pb-1">Contact</li>
                <li>DreamHost</li>
              </ul>
            </div>
            <div className="lg:w-2/4 w-full">
              <p className="font-dmSerif text-Creamm text-3xl pb-6">
                Newsletter
              </p>
              <p className="text-Ash text-xl pb-10">
                Subscribe to my newsletter for the latest insights, tips, and
                industry trends that will help drive your business growth.
              </p>
              <form action="">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="bg-Blackk text-Ash px-8 py-4 rounded-md font-roboto
                   font-medium mb-4 w-full text-center"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="bg-Orangee hover:bg-LightOrange text-Blackk px-8 py-4 
                rounded-md font-roboto font-medium w-full
            "
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full justify-between py-20">
          <div className="flex gap-6 lg:w-6/12 w-full lg:pb-0 pb-6">
            <FaFacebookSquare className="reactIcons" />
            <FaTwitter className="reactIcons" />
            <FaInstagram className="reactIcons" />
            <FaGlobe className="reactIcons" />
          </div>
          <div className="text-Ash flex justify-between items-end lg:w-6/12 w-full">
            <div className="w-4/5">
              <p className="pb-2">© Copyright Monica 2022</p>
              <p>
                Design by <span className="text-Creamm">StyleShout</span>
                Distribution By <span className="text-Creamm">ThemeWagon</span>
              </p>
            </div>
            <div
              className="text-Creamm border flex items-center justify-center rounded-full
             w-12 h-12"
            >
              <button onClick={scrollToTop}>
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
