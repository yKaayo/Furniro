import livingRoomImg1 from "../assets/img/beauty-garden-1195732_640.webp";
import closetImg1 from "../assets/img/beauty-garden-1195727_640.webp";
import livingRoomImg2 from "../assets/img/beauty-garden-1195721_640.webp";
import livingRoomImg3 from "../assets/img/brick-wall-1850095_640.webp";

const Share = () => {
  return (
    <section className="container mx-auto my-5 flex flex-col items-center">
      <p>Share your setup with</p>
      <h2 className="text-3xl font-bold">#FuniroFurniture</h2>

      <div className="mt-5 columns-3 px-5">
        <img className="m-5" src={livingRoomImg1} alt="Living Room" />
        <img className="m-5" src={closetImg1} alt="Closet" />
        <img className="m-5" src={livingRoomImg2} alt="Living Room" />
        <img className="m-5" src={livingRoomImg3} alt="Living Room" />
      </div>
    </section>
  );
};

export default Share;
