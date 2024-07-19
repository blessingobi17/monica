import introBg from "../assets/images/intro-bg.jpg";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main className="relative lg:container lg:px-20 px-8 md:py-24 py-10 bg-Background">
        <div className="flex lg:flex-row flex-col items-center justify-between w-full">
          <section className="text-Creamm lg:w-3/5 w-full">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                <p className="font-roboto pb-2 text-2xl font-light monica">
                  Hello, I'm Monica.
                </p>
              </div>
              <p className="font-dmSerif md:text-7xl text-4xl">
                I create marketing strategies for your business that get
                results.
              </p>
              <div className="flex items-center gap-6 pt-8 ">
                <button
                  className=" border-2 p-4 rounded-full border-Orangee"
                  onClick={scrollToBottom}
                >
                  <FaArrowDown />
                </button>
                <p className="font-roboto text-lg font-light">
                  Scroll for more
                </p>
              </div>
            </motion.div>
          </section>
          <motion.div
            initial={{ x: "-10vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="relative lg:py-0 py-10">
              <img src={introBg} className="h-96"></img>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Hero;
