import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faBarsStaggered,
  faMagnifyingGlass,
  faLocationDot,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import MainLayout from "./layout/MainLayout";
import Contact from "./pages/Contact";

library.add(
  faHeart,
  faCartShopping,
  faBarsStaggered,
  faMagnifyingGlass,
  faLocationDot,
  faPhone,
  faClock,
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
