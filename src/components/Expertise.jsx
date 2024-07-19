import { Link } from "react-router-dom";

const Expertise = () => {
  return (
    <>
      <div className="lg:px-20 px-8 md:py-24 py-20 w-full">
        <p className="font-roboto pb-2 text-2xl font-light monica text-Orangee">
          Expertise
        </p>
        <div className=" flex lg:flex-row flex-col justify-between">
          <section className="lg:w-2/4 w-full">
            <p className="font-dmSerif md:text-6xl text-4xl text-Blackk">
              My key areas of expertise.
            </p>
            <p className="text-xl text-Blackk leading-10 py-14 lg:w-11/12 w-full">
              I specialize in crafting innovative marketing strategies that
              drive business growth and enhance brand visibility. With a focus
              on data-driven insights and creative storytelling, I excel in
              developing tailored campaigns that resonate with target audiences
              and deliver measurable results.
            </p>
            <Link to="/service">
              <button
                className="text-Blackk px-14 py-4 rounded-md font-roboto hover:bg-Blackk hover:text-Creamm
                transition duration-500 ease-in-out font-medium border-2  lg:w-auto w-full"
              >
                View All Services
              </button>
            </Link>
          </section>
          <div className="lg:w-2/4 w-full lg:py-0 py-16">
            <section className="pb-8">
              <div className="flex gap-2 items-baseline">
                <p className="text-Orangee text-2xl font-roboto">01.</p>
                <p className="text-3xl font-dmSerif text-Blackk">
                  Digital Marketing
                </p>
              </div>
              <p className="text-xl text-Blackk leading-10 py-6">
                I specialize in leveraging digital platforms to create impactful
                marketing strategies that propel business growth and amplify
                brand presence. By harnessing the power of social media, search
                engine optimization (SEO), email marketing, and digital
                advertising, I craft targeted campaigns that engage audiences
                and deliver measurable results.
              </p>
            </section>
            <section className="pb-8">
              <div className="flex gap-2 items-baseline">
                <p className="text-Orangee text-2xl font-roboto">02.</p>
                <p className="text-3xl font-dmSerif text-Blackk">
                  Project Management
                </p>
              </div>
              <p className="text-xl text-Blackk leading-10 py-6">
                I excel in project management, ensuring seamless execution of
                marketing strategies from conception to implementation. With a
                focus on meticulous planning, resource allocation, and timeline
                management, I oversee projects to achieve objectives efficiently
                and exceed client expectations.
              </p>
            </section>
            <section className="pb-8">
              <div className="flex gap-2 items-baseline">
                <p className="text-Orangee text-2xl font-roboto">03.</p>
                <p className="text-3xl font-dmSerif text-Blackk">
                  Content Marketing
                </p>
              </div>
              <p className="text-xl text-Blackk leading-10 py-6">
                I specialize in content marketing strategies that resonate with
                target audiences and drive engagement. By creating compelling
                and valuable content across various platforms, I enhance brand
                visibility and establish thought leadership.
              </p>
            </section>
            <section className="pb-8">
              <div className="flex gap-2 items-baseline">
                <p className="text-Orangee text-2xl font-roboto">03.</p>
                <p className="text-3xl font-dmSerif text-Blackk">
                  Research & Discovery
                </p>
              </div>
              <p className="text-xl text-Blackk leading-10 py-6">
                I excel in conducting comprehensive research and discovery to
                uncover insights that drive informed marketing strategies. By
                analyzing market trends, consumer behavior, and competitive
                landscapes, I gather actionable data to guide decision-making
                and optimize campaign effectiveness.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
