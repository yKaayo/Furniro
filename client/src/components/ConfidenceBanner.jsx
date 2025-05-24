import trophyIcon from "../assets/icons/trophy_icon.svg";
import verifiedIcon from "../assets/icons/verified_icon.svg";
import deliveryIcon from "../assets/icons/box_delivery_package_parcel_sealed_icon.svg";
import callCenterIcon from "../assets/icons/call_center_service_icon.svg";

const ConfidenceBanner = () => {
  const bannerItems = [
    {
      img: trophyIcon,
      headline: "High Quality",
      paragraph: "Crafted from top materials",
    },
    {
      img: verifiedIcon,
      headline: "Warranty Protection",
      paragraph: "Over 2 years",
    },
    {
      img: deliveryIcon,
      headline: "Free Shipping",
      paragraph: "Order over 150 $",
      size: "h-24",
    },
    {
      img: callCenterIcon,
      headline: "24 / 7 Support",
      paragraph: "Dedicated support",
    },
  ];

  return (
    <section className="bg-secundary-white px-10 py-20">
      <div className="container mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {bannerItems.map((item) => (
          <div
            key={item.img}
            className="flex flex-col sm:flex-row items-center justify-center gap-2"
          >
            <img
              className={`${item.size ? item.size : "h-16"}`}
              src={item.img}
              alt=""
            />
            <div className="text-center sm:text-start">
              <h3 className="mb-1 text-2xl font-semibold">{item.headline}</h3>
              <p className="text-gray-500">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConfidenceBanner;
