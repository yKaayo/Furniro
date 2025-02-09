/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router";

const ProductItem = ({ product }) => {
  const [mouseOverStyle, setMouseOverStyle] = useState(null);

  return (
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
          <Link
            to={`:${product.id}`}
            state={product}
            className="btn--yellow px-5 py-2"
          >
            Add to cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
