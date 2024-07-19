import About from "./About";
import Expertise from "./Expertise";
import Clients from "./Clients";
import Consultation from "./Consultation";
import Article from "./Article";

const Body = () => {
  return (
    <>
      <main className="relative lg:container">
        <About />
        <Expertise />
        <Clients />
        <Consultation />
        <Article isHome={true} />
      </main>
    </>
  );
};

export default Body;
