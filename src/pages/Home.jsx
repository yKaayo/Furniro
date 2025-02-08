import { useLocation } from "react-router";
import Hero from "../layout/Hero";
import kitchenImg from "../assets/img/kitchen.webp";
import livingRoomImg from "../assets/img/living-room.webp";
import bedroomImg from "../assets/img/bedroom.webp";

const Home = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Hero />

      <section className="bg-white">
        <div className="container mx-auto flex flex-col items-center py-10 px-5">
          <h2 className="text-3xl font-bold">Browse The Range</h2>
          <p className="mt-2 text-balance text-gray-600 text-center mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <div className="grid h-full w-full grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="flex h-full flex-col items-center hover:scale-105 duration-300 hover:drop-shadow-md">
              <div
                className="h-[250px] md:h-[400px] w-full rounded-xl bg-cover bg-[left_center]"
                style={{ backgroundImage: `url(${kitchenImg})` }}
              ></div>
              <p className="mt-2">Kitchen</p>
            </div>
            <div className="flex h-full flex-col items-center hover:scale-105 duration-300 hover:drop-shadow-md">
              <div
                className="h-[250px] md:h-[400px] w-full rounded-xl bg-cover bg-[left_center]"
                style={{ backgroundImage: `url(${livingRoomImg})` }}
              ></div>
              <p className="mt-2">Living Room</p>
            </div>
            <div className="flex f-full flex-col items-center hover:scale-105 duration-300 hover:drop-shadow-md">
              <div
                className="h-[250px] md:h-[400px] w-full rounded-xl bg-cover"
                style={{ backgroundImage: `url(${bedroomImg})` }}
              ></div>
              <p className="mt-2">Bedroom</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
