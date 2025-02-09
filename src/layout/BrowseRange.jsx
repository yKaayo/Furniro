import kitchenImg from "../assets/img/kitchen.webp";
import livingRoomImg from "../assets/img/living-room.webp";
import bedroomImg from "../assets/img/bedroom.webp";

const BrowseRange = () => {
  const secondSectionData = [
    {
      img: kitchenImg,
      text: "Kitchen",
    },
    {
      img: livingRoomImg,
      text: "Living Room",
    },
    { img: bedroomImg, text: "Bedroom" },
  ];

  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col items-center px-5 py-10">
        <h2 className="text-3xl font-bold">Browse The Range</h2>
        <p className="mt-2 mb-10 text-center text-balance text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid h-full w-full grid-cols-1 gap-5 sm:grid-cols-3">
          {secondSectionData.map((data) => (
            <div
              key={data.img}
              className="flex h-full flex-col items-center duration-300 hover:scale-105 hover:drop-shadow-md"
            >
              <div
                className="h-[250px] w-full rounded-xl bg-cover bg-[left_center] md:h-[400px]"
                style={{ backgroundImage: `url(${data.img})` }}
              ></div>
              <p className="mt-2">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseRange;
