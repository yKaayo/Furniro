import counch1Img from "../assets/img/counch.webp";
import chair1Img from "../assets/img/chair.webp";
import { v4 as id } from "uuid";
import ProductItem from "../components/ProductItem";

const products = [
  {
    id: id(),
    name: "Counch",
    img: counch1Img,
    price: "R$999",
    description: "Stylish counch",
  },
  {
    id: id(),
    name: "Chair",
    img: chair1Img,
    price: "R$99",
    description: "Stylish chair",
  },
];

const ProductsShop = () => {
  
  return (
    <section className="container mx-auto grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductsShop;
