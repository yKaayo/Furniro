import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-[auto_auto] lg:grid-cols-4 gap-x-5 gap-y-16 px-10 lg:px-20 py-10">
        <div className="flex flex-col gap-5 items-center text-center sm:text-start sm:items-start">
          <h2 className="text-3xl font-bold">Funiro.</h2>

          <p className="text-gray-600 text-balance">400 University Drive Suite 200 Coral Gables,<br></br>FL 33134 USA</p>
        </div>

        <div className="flex flex-col items-center gap-5 font-semibold text-center sm:text-start sm:items-start">
          <h3 className="text-gray-600">Links</h3>

          <ul className="flex flex-col gap-3 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
 
        <div className="flex flex-col gap-5 font-semibold items-center text-center sm:text-start sm:items-start">
          <h3 className="text-gray-600">Help</h3>

          <ul className="flex flex-col gap-3">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 font-semibold items-center sm:items-start">
          <h3 className="text-gray-600">Newsletter</h3>

          <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              className="border-b-2 border-gray-400"
              type="email"
              placeholder="Enter Your Email Adress"
            />
            <button className="border-b-2 border-gray-400">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
