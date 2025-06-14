import SectionBgImg from "../assets/img/section-bg.webp";

const SectionBg = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${SectionBgImg})` }}
      className="flex h-[90svh] flex-col items-center justify-center gap-3 bg-cover pt-20 bg-fixed"
    >
      <h2 className="text-4xl font-semibold">{props.name}</h2>
      <p className="font-semibold">
        <span className="me-1">Home</span>
        <span className="ms-1 font-normal">{props.name}</span>
      </p>
    </div>
  );
};

export default SectionBg;
