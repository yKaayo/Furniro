import heroBgImg from "../assets/img/hero-bg.webp";

const Hero = () => {
  return (
    <main
      style={{ backgroundImage: `url(${heroBgImg})` }}
      className="bg-cover bg-[35%_100%]"
    >
      <div className="container mx-auto grid h-[90svh] grid-cols-1 items-center justify-center px-5 md:grid-cols-2">
        <div className="bg-secundary-yellow/80 col-start-2 flex flex-col items-start gap-3 p-10">
          <p>New Arrival</p>
          <h2 className="text-primary-yellow text-4xl font-semibold">
            Discover Our New Collection
          </h2>
          <p className="text-balance">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <a className="btn--yellow mt-5 px-14 py-4" href="">
            BUY Now
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
