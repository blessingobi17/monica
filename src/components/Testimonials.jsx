import Carousel from "../components/Carousel";

const Testimonials = () => {
  return (
    <>
      <div className="bg-Creamm w-full lg:px-20 px-8 md:py-20 py-10">
        <section className="text-center pb-6">
          <p className="font-roboto pb-2 text-2xl font-light text-Orangee">
            Testimonials
          </p>
          <p className="font-dmSerif text-4xl  ">Reviews From Real Clients</p>
        </section>
        <Carousel />
      </div>
    </>
  );
};

export default Testimonials;
