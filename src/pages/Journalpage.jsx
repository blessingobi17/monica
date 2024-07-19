import Article from "../components/Article";
import Consultation from "../components/Consultation";

const Journalpage = () => {
  return (
    <>
      <div>
        <div className="relative lg:container lg:px-20 px-8 md:py-20 py-10 bg-Background">
          <section className="text-Creamm w-full text-center">
            <p className="font-roboto pb-2 text-2xl font-light text-Orangee">
              My Blog
            </p>
            <p className="font-dmSerif md:text-7xl text-4xl">Recent Writings</p>
          </section>
        </div>
      </div>
      <Article />
      <Consultation />
    </>
  );
};

export default Journalpage;
