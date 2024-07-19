import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="bg-Background lg:px-20 px-8 md:py-32 py-28 w-full">
        <p className="font-roboto pb-2 text-2xl font-light monica text-Orangee">
          About
        </p>
        <div className=" flex lg:flex-row flex-col justify-between">
          <section className="lg:w-2/4 w-full lg:pb-0 pb-10">
            <p className="font-dmSerif md:text-6xl text-4xl text-Creamm">
              An inspiring headline about yourself.
            </p>
            <Link to="/about">
              <button
                className="text-Creamm hover:bg-Creamm hover:text-Blackk
                transition duration-500 ease-in-out
                 px-14 py-4 rounded-md font-roboto font-medium my-14 border-2 md:w-auto w-full
                "
              >
                More About Me
              </button>
            </Link>
            <div className="flex gap-6 md:justify-start justify-center">
              <FaFacebookSquare className="reactIcons" />
              <FaTwitter className="reactIcons" />
              <FaInstagram className="reactIcons" />
              <FaGlobe className="reactIcons" />
            </div>
          </section>
          <div className="lg:w-2/4 w-full">
            <p className="text-xl text-Creamm leading-10">
              With a passion for crafting compelling narratives and strategic
              marketing solutions, I'm a seasoned professional dedicated to
              driving business growth through innovative strategies. With over
              10 years of experience in the dynamic realm of marketing, I am an
              expert in understanding market trends, consumer behavior, and
              digital landscapes.
              <span className="block pt-8">
                I thrive on the challenge of turning visions into actionable
                plans that yield tangible results. From developing comprehensive
                marketing campaigns to leveraging cutting-edge digital tools, I
                specialize in creating tailored strategies that resonate with
                target audiences and elevate brand presence.
              </span>
              <span className="block pt-8">
                Known for my analytical mindset and creative flair, I combine
                data-driven insights with compelling storytelling to captivate
                audiences and drive engagement. Whether navigating the nuances
                of social media platforms, optimizing SEO strategies, or
                conceptualizing impactful branding initiatives, I excel in
                delivering measurable outcomes that exceed expectations.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
