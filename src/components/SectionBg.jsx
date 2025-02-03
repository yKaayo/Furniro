/* eslint-disable react/prop-types */
import SectionBgImg from "../assets/img/section-bg.webp";

const SectionBg = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${SectionBgImg})` }}
      className="flex flex-col justify-center items-center gap-3 pt-20 h-[90svh] bg-cover"
    >
      <h2 className="text-4xl font-semibold">{props.name}</h2>
      <p className="font-semibold"><span className="me-1">Home</span> &gt; <span className="ms-1 font-normal">{props.name}</span></p>
    </div>
  );
};

export default SectionBg;
