import flash from "../assets/images/clients/flash.svg";
import rise from "../assets/images/clients/rise.svg";
import cactus from "../assets/images/clients/cactus.svg";
import pinpoint from "../assets/images/clients/pinpoint.svg";
import proline from "../assets/images/clients/proline.svg";
import vision from "../assets/images/clients/vision.svg";
import volume from "../assets/images/clients/volume.svg";
import hitech from "../assets/images/clients/hitech.svg";
import terra from "../assets/images/clients/terra.svg";
import chain from "../assets/images/clients/chain.svg";
import Carousel from "./Carousel";

const Clients = () => {
  return (
    <>
      <div className="bg-Creamm lg:px-20 px-8 lg:py-32 py-20 w-full">
        <p className="font-roboto pb-2 text-2xl font-light monica text-Orangee">
          Clients
        </p>
        <div className=" flex lg:flex-row flex-col justify-between">
          <section className="lg:w-2/4 w-full">
            <p className="font-dmSerif md:text-6xl text-4xl text-Blackk lg:w-11/12 w-full">
              I have had the privilege of working with these incredible brands.
            </p>
          </section>
          <div className="lg:w-2/4 w-full lg:py-0 py-10">
            <p className="text-xl text-Blackk leading-10">
              Throughout my career in marketing, I've had the privilege of
              collaborating with a diverse range of clients and esteemed brands
              across various industries. My portfolio includes partnerships with
              startups aiming to establish their market presence, mid-sized
              companies looking to scale their operations, and multinational
              corporations seeking innovative marketing solutions.
              <span className="block pt-8">
                I've worked closely with clients in sectors such as technology,
                consumer goods, healthcare, finance, and hospitality, among
                others. Each collaboration has been a unique opportunity to
                apply my expertise in crafting tailored marketing strategies
                that align with their specific goals and challenges. Among the
                brands I've had the pleasure of working with are recognizable
                names known for their commitment to innovation and excellence.
                These collaborations have allowed me to contribute to their
                success stories by developing comprehensive marketing campaigns,
                optimizing digital strategies, and enhancing brand visibility
                across diverse channels.
              </span>
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 my-20 ">
          <div
            className="border lg:border-r-0 border-r py-8 flex items-center justify-center 
            hover:bg-Orangee transition duration-700 ease-in-out"
          >
            <img src={flash} alt="" className="w-52" />
          </div>
          <div
            className="border py-8 flex items-center justify-center hover:bg-Orangee
            transition duration-700 ease-in-out"
          >
            <img src={rise} alt="" className="w-52" />
          </div>
          <div
            className="border-y lg:border-x-0 border-x py-8 flex items-center justify-center 
            hover:bg-Orangee transition duration-700 ease-in-out"
          >
            <img src={cactus} alt="" className="w-52" />
          </div>
          <div
            className="border py-8 flex items-center justify-center hover:bg-Orangee
            transition duration-700 ease-in-out"
          >
            <img src={pinpoint} alt="" className="w-52" />
          </div>
          <div
            className="border-y-0 border-l lg:border-r-0 border-r py-8 flex items-center justify-center 
            hover:bg-Orangee transition duration-700 ease-in-out"
          >
            <img src={proline} alt="" className="w-52" />
          </div>
          <div
            className=" border lg:border-t-0 border-t py-8 flex items-center justify-center 
            hover:bg-Orangee transition duration-700 ease-in-out"
          >
            <img src={vision} alt="" className="w-52" />
          </div>
          <div
            className="border lg:border-x-0 border-x lg:border-t-0 md:border-t border-t-0 
            py-8 flex items-center justify-center
             hover:bg-Orangee transition duration-700 ease-in-out"
          >
            <img src={volume} alt="" className="w-52" />
          </div>
          <div
            className="border border-t-0 py-8 flex items-center justify-center hover:bg-Orangee
            transition duration-700 ease-in-out"
          >
            <img src={hitech} alt="" className="w-52" />
          </div>
          <div
            className="border md:border-r-0 border-r py-8 flex items-center justify-center 
            hover:bg-Orangee transition duration-700 ease-in-out"
          >
            <img src={terra} alt="" className="w-52" />
          </div>
          <div
            className=" border border-t-0 py-8 flex items-center justify-center hover:bg-Orangee
            transition duration-700 ease-in-out"
          >
            <img src={chain} alt="" className="w-52" />
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Clients;
