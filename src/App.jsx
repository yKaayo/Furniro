import Header from "./layout/Header";
import Main from "./layout/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faBarsStaggered,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHeart, faCartShopping, faBarsStaggered, faMagnifyingGlass);

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
