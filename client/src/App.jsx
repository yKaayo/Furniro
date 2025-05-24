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
import Blog from "./pages/Blog";
import MainLayout from "./layout/MainLayout";
import Contact from "./pages/Contact";
import ProductSection from "./layout/ProductSection";
import Cart from "./pages/Cart";

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
          <Route path="shop">
            <Route index element={<Shop />} />
            <Route path=":id" element={<ProductSection />} />
          </Route>
          <Route path="Blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
        </Route>

        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
