import BrowseRange from "../layout/BrowseRange";
import Hero from "../layout/Hero";
import Share from "../layout/Share";

const Home = () => {
  return (
    <section className="bg-white">
      <Hero />
      <BrowseRange />
      <Share />
    </section>
  );
};

export default Home;
