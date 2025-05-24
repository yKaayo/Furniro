import ConfidenceBanner from "../components/ConfidenceBanner";
import SectionBg from "../components/SectionBg";
import ProductsShop from "../layout/ProductsShop";

const Shop = () => {
  return (
    <section className="bg-white">
      <SectionBg name="Shop" />
      <ProductsShop />
      <ConfidenceBanner />
    </section>
  );
};

export default Shop;
