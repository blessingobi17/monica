import Testimonials from "../components/Testimonials";
import Consultation from "../components/Consultation";

const Servicepage = () => {
  return (
    <>
      <div>
        <div className="relative lg:container lg:px-20 px-8 md:py-20 py-10 bg-Background">
          <section className="text-Creamm w-full text-center">
            <p className="font-roboto pb-2 text-2xl font-light text-Orangee">
              Services
            </p>
            <p className="font-dmSerif md:text-7xl text-4xl">
              High-Impact Services
            </p>
          </section>
        </div>
        <main className="lg:container">
          <div className="lg:px-20 px-8 md:py-24 py-10">
            <div className="flex lg:flex-row flex-col justify-between md:pb-0 pb-14 ">
              <h1 className="lg:w-2/4 w-full">
                <p
                  className="font-dmSerif lg:text-7xl text-4xl text-Balckk md:w-11/12 w-full
                md:text-start text-center lg:pb-0 pb-8
                "
                >
                  High-impact services to help your business
                </p>
              </h1>
              <div className="lg:w-2/4 w-full">
                <p className="text-xl text-Blackk leading-10">
                  Unlock your business's potential with our high-impact services
                  designed to drive growth and success. From innovative
                  marketing strategies to expert consulting, our solutions are
                  tailored to meet your unique needs. Partner with us to enhance
                  your brand's visibility, streamline operations, and achieve
                  your business goals. Let's turn your ambitions into
                  achievements!
                </p>
              </div>
            </div>
            <div className="w-full md:py-28 grid lg:grid-cols-2 grid-cols-1 gap-10 justify-between ">
              <section className="pb-8">
                <div className="flex gap-2 items-baseline">
                  <p className="text-Orangee text-2xl font-roboto">01.</p>
                  <p className="text-3xl font-dmSerif text-Blackk">
                    Digital Marketing
                  </p>
                </div>
                <p className="text-xl text-Blackk leading-10 py-6">
                  I specialize in leveraging digital platforms to create
                  impactful marketing strategies that propel business growth and
                  amplify brand presence. By harnessing the power of social
                  media, search engine optimization (SEO), email marketing, and
                  digital advertising, I craft targeted campaigns that engage
                  audiences and deliver measurable results.
                </p>
              </section>
              <section className="pb-8">
                <div className="flex gap-2 items-baseline">
                  <p className="text-Orangee text-2xl font-roboto">02.</p>
                  <p className="text-3xl font-dmSerif text-Blackk">
                    Social Media Marketing
                  </p>
                </div>
                <p className="text-xl text-Blackk leading-10 py-6">
                  Harness the power of social media to elevate your brand and
                  engage with your audience like never before. With my expertise
                  in social media marketing, I can help you craft compelling
                  content, develop effective campaigns, and build a strong
                  online presence. Let's work together to turn followers into
                  loyal customers and amplify your brand's reach across all
                  major platforms.
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
                  As a dedicated content marketer, I’m here to help you tell
                  your brand’s story in a way that captivates and converts. I
                  specialize in creating high-quality, relevant content that
                  resonates with your audience and drives engagement. From blog
                  posts and articles to videos and social media updates, I craft
                  compelling narratives that align with your business goals.
                </p>
              </section>
              <section className="pb-8">
                <div className="flex gap-2 items-baseline">
                  <p className="text-Orangee text-2xl font-roboto">04.</p>
                  <p className="text-3xl font-dmSerif text-Blackk">
                    Paid Advertising
                  </p>
                </div>
                <p className="text-xl text-Blackk leading-10 py-6">
                  Maximize your reach and ROI with my strategic paid advertising
                  services. I create targeted ad campaigns that deliver results,
                  whether it's through search engines, social media platforms,
                  or display networks. By leveraging data-driven insights and
                  expert optimization techniques, I ensure your ads reach the
                  right audience at the right time.
                </p>
              </section>
              <section className="pb-8">
                <div className="flex gap-2 items-baseline">
                  <p className="text-Orangee text-2xl font-roboto">05.</p>
                  <p className="text-3xl font-dmSerif text-Blackk">
                    Search Engine Optimization
                  </p>
                </div>
                <p className="text-xl text-Blackk leading-10 py-6">
                  Maximize your online visibility and attract more organic
                  traffic with my expert search engine optimization services. I
                  specialize in optimizing websites to rank higher on search
                  engines, ensuring your target audience finds you easily.
                  Together, we'll improve your site's performance, boost your
                  search rankings, and drive sustainable growth.
                </p>
              </section>
              <section className="pb-8">
                <div className="flex gap-2 items-baseline">
                  <p className="text-Orangee text-2xl font-roboto">06.</p>
                  <p className="text-3xl font-dmSerif text-Blackk">
                    Advanced Analytics
                  </p>
                </div>
                <p className="text-xl text-Blackk leading-10 py-6">
                  Unlock the full potential of your data with my advanced
                  analytics expertise. I can help you transform raw data into
                  actionable insights, enabling you to make informed decisions
                  and drive your business forward. From identifying trends to
                  optimizing performance, my advanced analytics services will
                  provide you with the clarity and direction you need.
                </p>
              </section>
              <section className="pb-8">
                <div className="flex gap-2 items-baseline">
                  <p className="text-Orangee text-2xl font-roboto">07.</p>
                  <p className="text-3xl font-dmSerif text-Blackk">
                    Email Marketing
                  </p>
                </div>
                <p className="text-xl text-Blackk leading-10 py-6">
                  Elevate your communication strategy with my expert email
                  marketing services. I specialize in creating engaging and
                  effective email campaigns that nurture leads, boost
                  conversions, and foster customer loyalty. From crafting
                  compelling content to optimizing delivery, I ensure your
                  messages resonate with your audience and drive results.
                </p>
              </section>
              <section className="pb-8">
                <div className="flex gap-2 items-baseline">
                  <p className="text-Orangee text-2xl font-roboto">08.</p>
                  <p className="text-3xl font-dmSerif text-Blackk">
                    Conversion Rate Optimization
                  </p>
                </div>
                <p className="text-xl text-Blackk leading-10 py-6">
                  Enhance your website's performance and maximize your marketing
                  efforts with my conversion rate optimization services. I
                  specialize in analyzing user behavior, testing strategies, and
                  implementing tactics that turn visitors into loyal customers.
                  By optimizing your site's conversion funnel, we can increase
                  sales, leads, and overall profitability.
                </p>
              </section>
              <section className="pb-8">
                <div className="flex gap-2 items-baseline">
                  <p className="text-Orangee text-2xl font-roboto">08.</p>
                  <p className="text-3xl font-dmSerif text-Blackk">
                    Web Design
                  </p>
                </div>
                <p className="text-xl text-Blackk leading-10 py-6">
                  Transform your online presence with my expert web design
                  services. I specialize in creating visually appealing and
                  user-friendly websites that reflect your brand’s unique
                  identity. From intuitive navigation to responsive design, I
                  ensure your website not only attracts visitors but also
                  converts them into customers.
                </p>
              </section>
            </div>
          </div>

          <Testimonials />
          <Consultation />
        </main>
      </div>
    </>
  );
};

export default Servicepage;
