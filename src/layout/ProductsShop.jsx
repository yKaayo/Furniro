import counch1Img from "../assets/img/counch.webp";
import chair1Img from "../assets/img/chair.webp";
import { useState } from "react";
import { v4 as id } from "uuid";
import { Link } from "react-router";

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
  const [mouseOverStyle, setMouseOverStyle] = useState(null);

  return (
    <section className="container mx-auto grid grid-cols-1 gap-5 p-5 sm:grid-cols-2">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative bg-gray-200"
          onMouseOver={() => setMouseOverStyle(product.id)}
          onMouseOut={() => setMouseOverStyle(null)}
        >
          <div
            className="h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${product.img})` }}
          ></div>
          <div className="mx-3 my-5 flex flex-col items-start gap-3">
            <p className="text-2xl font-semibold">{product.name}</p>
            <p>{product.description}</p>
            <div className="flex w-full items-center justify-between gap-5">
              <p className="text-xl font-semibold">{product.price}</p>
              <p className="relative text-gray-500">
                <span className="absolute bottom-3 h-0.5 w-full bg-gray-500"></span>
                R${Number(product.price.slice(2)) + 500}
              </p>
            </div>
          </div>

          {mouseOverStyle === product.id && (
            <div
              className={`absolute top-0 flex h-full w-full items-center justify-center ${mouseOverStyle ? "bg-black/50" : ""}`}
            >
              <Link to={`:${product.id}`} state={product} className="btn--yellow px-5 py-2">Add to cart</Link>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProductsShop;
