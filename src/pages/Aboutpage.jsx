import Consultation from "../components/Consultation";
import Testimonials from "../components/Testimonials";

const Aboutpage = () => {
  return (
    <>
      <div>
        <div className="relative lg:container lg:px-20 px-8 md:py-20 py-10 bg-Background">
          <section className="text-Creamm w-full text-center">
            <p className="font-roboto pb-2 text-2xl font-light text-Orangee">
              About
            </p>
            <p className="font-dmSerif md:text-7xl text-4xl">
              Hello, I'm Monica
            </p>
          </section>
        </div>
        <main className="lg:container ">
          <div className=" lg:px-20 px-8 md:py-24 py-10">
            <div className="flex lg:flex-row flex-col justify-between ">
              <h1 className="lg:w-2/4 w-full">
                <p
                  className="font-dmSerif lg:text-7xl text-4xl text-Balckk md:w-11/12 w-full
                md:text-start text-center lg:pb-0 pb-8
                "
                >
                  Some inspiring words to describe yourself
                </p>
              </h1>
              <div className="lg:w-2/4 w-full">
                <p className="text-xl text-Blackk leading-10">
                  I am a seasoned marketing strategist with a passion for
                  driving business growth through innovative and effective
                  strategies. What sets me apart is my commitment to measurable
                  results. I believe in data-driven decision-making, leveraging
                  advanced analytics and industry trends to optimize campaigns
                  and maximize ROI. Whether it’s enhancing brand visibility,
                  increasing conversion rates, or building customer loyalty, I
                  excel in delivering strategies that drive sustainable business
                  success.
                </p>
              </div>
            </div>
            <section className="md:py-36 py-10">
              <h2 className="font-dmSerif text-4xl pb-6">How I Got Here</h2>
              <p className="text-xl text-Blackk leading-10">
                My journey to becoming a seasoned marketing strategist has been
                a culmination of passion, perseverance, and continuous learning.
                It all started with a deep fascination for understanding
                consumer behavior and a drive to make a meaningful impact in the
                business world. Throughout my career, I've had the privilege of
                working with diverse teams and industries, each presenting
                unique challenges and opportunities. These experiences not only
                broadened my perspective but also reinforced my belief in the
                power of collaboration and innovation.
              </p>
            </section>
            <section className="text-Blackk">
              <h2 className="font-dmSerif text-4xl pb-6">
                My Values & Beliefs
              </h2>
              <p className=" text-xl font-roboto leading-10 ">
                At the core of my approach as a marketing strategist are a set
                of deeply held values and beliefs that guide every decision and
                action I take. Integrity is paramount, I believe in
                transparency, honesty, and ethical practices in all aspects of
                my work. Trust forms the foundation of every relationship,
                whether with clients, colleagues, or partners. Innovation drives
                me forward—I am constantly seeking new ideas and approaches to
                push boundaries and deliver exceptional results. Creativity
                fuels my strategies, allowing me to find unique solutions to
                complex challenges and capture audience attention in meaningful
                ways.
              </p>
            </section>
            <section className="md:py-36 py-10">
              <h2 className="font-dmSerif text-4xl pb-6">Why Work With Me</h2>
              <p className="text-xl text-Blackk leading-10">
                Choosing the right marketing strategist is more than just
                finding someone with the right skills—it’s about finding a
                partner who understands your vision and is committed to
                achieving your business goals alongside you. I bring more than
                expertise; I bring a passion for crafting strategies that not
                only drive results but also resonate with your audience on a
                deeper level. My approach is rooted in understanding your unique
                challenges and opportunities, and then developing tailored
                solutions that make a meaningful impact.
                <span className="block pt-6">
                  What sets me apart is my dedication to excellence and
                  innovation. I thrive on pushing boundaries and exploring new
                  possibilities to ensure your brand stands out in a crowded
                  marketplace. I believe in building collaborative relationships
                  built on trust, transparency, and mutual respect—because your
                  success is my success.
                </span>
              </p>
            </section>
          </div>
          <Testimonials />
          <Consultation />
        </main>
      </div>
    </>
  );
};

export default Aboutpage;
