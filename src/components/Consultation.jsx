import { Link } from "react-router-dom";

const Consultation = () => {
  return (
    <>
      <div className="bg-Blackk w-full text-center flex flex-col items-center py-24 lg:px-0 px-8">
        <p className="font-dmSerif md:text-6xl text-4xl text-Creamm lg:w-2/4 w-full">
          Get started with a consultation today.
        </p>
        <p className="text-xl text-Creamm leading-10 lg:w-2/4 w-full py-10">
          Ready to take your business to the next level? Schedule a consultation
          today to explore how our tailored marketing strategies can drive
          growth and enhance your brand's impact. Let's collaborate to achieve
          your goals effectively and efficiently.
        </p>
        <Link to="/contact">
          <button
            className="bg-Orangee text-Blackk px-8 py-4 rounded-md font-roboto font-medium
          lg:w-auto w-full"
          >
            Let's Work Together
          </button>
        </Link>
      </div>
    </>
  );
};

export default Consultation;
