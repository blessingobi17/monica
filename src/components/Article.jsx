const Article = ({ isHome = false }) => {
  const articleLists = isHome
    ? "bg-Background flex flex-col items-center md:py-32 py-20"
    : " flex flex-col items-center md:py-10 py-20";

  return (
    <>
      <div className={articleLists}>
        <div className={isHome ? "lg:px-0 px-8 text-center" : "hidden"}>
          <p className="font-roboto pb-2 text-2xl font-light monica text-Orangee text-center">
            Recent Articles
          </p>
          <p className="font-dmSerif md:text-6xl text-4xl text-Creamm ">
            Latest articles from my blog.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:px-20 px-8 py-14">
          <section>
            <p className="text-lg text-Orangee">Sponsored</p>
            <p
              className={
                isHome
                  ? "font-dmSerif text-Creamm text-3xl pb-6 md:w-4/5 w-full"
                  : "font-dmSerif text-Blackk text-3xl pb-6 md:w-4/5 w-full"
              }
            >
              Need Web Hosting for Your Websites?
            </p>
            <p
              className={
                isHome
                  ? "text-Ash text-xl font-roboto leading-8"
                  : "text-Blackk text-xl font-roboto leading-8"
              }
            >
              Need hosting for your website? We would highly recommend
              <span className="text-Orangee "> DreamHost.</span> Enjoy 100%
              in-house support, guaranteed performance and uptime, 1-click
              installs, and a super-intuitive control panel to make managing
              your websites and projects easy.
              <span className="text-Orangee"> Sign up</span> now to get started.
            </p>
          </section>
          <section>
            <p className="text-lg text-Orangee">Productivity</p>
            <p
              className={
                isHome
                  ? "font-dmSerif text-Creamm text-3xl pb-6 md:w-4/5 w-full"
                  : "font-dmSerif text-Blackk text-3xl pb-6 md:w-4/5 w-full"
              }
            >
              5 Market Productivity Apps for Your Team
            </p>
            <p
              className={
                isHome
                  ? "text-Ash text-xl font-roboto leading-8"
                  : "text-Blackk text-xl font-roboto leading-8"
              }
            >
              In today's fast-paced business environment, staying productive is
              key to maintaining a competitive edge. Equip your team with the
              best tools to streamline workflows, enhance collaboration, and
              boost overall efficiency.
              <span className="text-Orangee"> Sign up</span> now to get started.
            </p>
          </section>
          <section>
            <p className="text-lg text-Orangee">SEO</p>
            <p
              className={
                isHome
                  ? "font-dmSerif text-Creamm text-3xl pb-6 md:w-4/5 w-full"
                  : "font-dmSerif text-Blackk text-3xl pb-6 md:w-4/5 w-full"
              }
            >
              7 SEO Factors to Consider for Better Website Ranking
            </p>
            <p
              className={
                isHome
                  ? "text-Ash text-xl font-roboto leading-8"
                  : "text-Blackk text-xl font-roboto leading-8"
              }
            >
              Enhance your website’s visibility and drive more organic traffic
              by focusing on key SEO factors. These essential elements can
              significantly improve your search engine ranking, ensuring your
              site stands out in a crowded digital landscape.
              <span className="text-Orangee"> Sign up</span> now to get started.
            </p>
          </section>
          <section>
            <p className="text-lg text-Orangee">Productivity</p>
            <p
              className={
                isHome
                  ? "font-dmSerif text-Creamm text-3xl pb-6 md:w-4/5 w-full"
                  : "font-dmSerif text-Blackk text-3xl pb-6 md:w-4/5 w-full"
              }
            >
              5 Effective Web Design Principles
            </p>
            <p
              className={
                isHome
                  ? "text-Ash text-xl font-roboto leading-8"
                  : "text-Blackk text-xl font-roboto leading-8"
              }
            >
              Creating a compelling and user-friendly website is essential for
              capturing and retaining visitor attention. By incorporating key
              web design principles, you can ensure your site is both visually
              appealing and highly functional.
              <span className="text-Orangee"> Sign up</span> now to get started.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Article;
