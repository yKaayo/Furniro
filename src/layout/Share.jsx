import livingRoomImg1 from "../assets/img/beauty-garden-1195732_640.webp";
import closetImg1 from "../assets/img/beauty-garden-1195727_640.webp";
import livingRoomImg2 from "../assets/img/beauty-garden-1195721_640.webp";
import livingRoomImg3 from "../assets/img/brick-wall-1850095_640.webp";
import livingRoomImg4 from "../assets/img/living-room-set-728733_640.webp";

const Share = () => {
  return (
    <section className="container mx-auto my-5 flex flex-col items-center px-3 sm:px-0">
      <p>Share your setup with</p>
      <h2 className="text-3xl font-bold">#FuniroFurniture</h2>

      <div className="mt-5 grid grid-cols-3 grid-rows-2 items-center gap-3">
        <img
          className="row-span-2 py-3"
          src={livingRoomImg3}
          alt="Living Room"
        />
        <img className="" src={livingRoomImg1} alt="Living Room" />
        <div className="row-span-2 flex flex-col gap-3">
          <img className="" src={livingRoomImg2} alt="Living Room" />
          <img className="" src={livingRoomImg4} alt="Living Room" />
        </div>
        <img className="" src={closetImg1} alt="Closet" />
        
      </div>
    </section>
  );
};

export default Share;
