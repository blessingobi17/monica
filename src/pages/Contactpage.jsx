import Testimonials from "../components/Testimonials";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const Contactpage = () => {
  return (
    <>
      <div>
        <div className="relative lg:container lg:px-20 px-8 md:py-20 py-10 bg-Background">
          <section className="text-Creamm w-full text-center">
            <p className="font-roboto pb-2 text-2xl font-light text-Orangee">
              Contact
            </p>
            <p className="font-dmSerif md:text-7xl text-4xl">Get In Touch</p>
          </section>
        </div>
        <main className=" lg:px-20 px-8 md:py-24 py-10">
          <div className="flex lg:flex-row flex-col justify-between ">
            <h1 className="lg:w-2/4 w-full">
              <p
                className="font-dmSerif lg:text-7xl text-4xl text-Balckk md:w-11/12 w-full
                md:text-start text-center lg:pb-0 pb-8
                "
              >
                Let's take your business to the next level.
              </p>
            </h1>
            <div className="lg:w-2/4 w-full">
              <p className="text-xl text-Blackk leading-10">
                Ready to elevate your business? With innovative strategies,
                expert insights, and a passion for growth, we can help you
                achieve new heights. Let's transform your vision into reality
                and propel your business forward.
              </p>
            </div>
          </div>
          <div className="md:pt-36 pt-20">
            <p className="font-dmSerif  text-4xl text-Balckk pb-8">
              Let's Work Together
            </p>
            <div className="flex lg:flex-row flex-col justify-between w-full">
              <div className="lg:w-2/4 w-full">
                <section>
                  <p className="text-xl text-Blackk leading-10 lg:w-5/6 w-full">
                    Are you ready to achieve remarkable results? By
                    collaborating, we can unlock your business's full potential.
                    With my expertise in innovative marketing strategies, we'll
                    drive growth, enhance your brand's visibility, and create
                    lasting success. Let's embark on this journey together and
                    make your vision a reality.
                  </p>
                </section>
                <button
                  className="text-Blackk bg-Orangee py-4 rounded-md font-roboto font-medium 
                  my-14 lg:w-5/6 w-full flex items-center justify-center gap-6 text-center text-lg"
                >
                  <FaEnvelope />
                  Send Me An Email
                </button>
              </div>
              <div className="md:w-2/4 w-full text-Blackk font-roboto text-xl">
                <p className=" font-medium">FOLLOW ON SOCIAL</p>
                <div className="flex gap-6 justify-start  text-Blackk py-6">
                  <FaFacebookSquare className="h-7 w-7" />
                  <FaTwitter className="h-7 w-7" />
                  <FaInstagram className="h-7 w-7" />
                  <FaGlobe className="h-7 w-7" />
                </div>
                <p className="py-4 font-medium">
                  EMAIL
                  <span className="block pt-1 font-normal">
                    hello@monica.com
                  </span>
                </p>
                <p className="py-4 font-medium">
                  PHONE
                  <span className="block font-normal pt-1">+197 543 2345</span>
                  <span className="block font-normal">+197 123 9876</span>
                </p>
              </div>
            </div>
          </div>
        </main>
        <Testimonials />
      </div>
    </>
  );
};

export default Contactpage;
