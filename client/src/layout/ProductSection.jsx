import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

const Product = () => {
  const product = useLocation().state;
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div>
        <p className="pt-20">Página não encontrada!</p>
        <button className="btn--yellow" onClick={() => navigate(-1)}>
          Voltar
        </button>
      </div>
    );
  }

  return (
    <>
      <section className="bg-secundary-white pt-20 mb-10">
        <div className="container mx-auto px-10 py-5">
          <p className="">
            <Link to={"/home"} className="">
              Home
            </Link>
            <span className="mx-3">&gt;</span>
            <Link to={"/shop"} className="">
              Shop
            </Link>
            <span className="ms-3">&gt;</span>
            <span className="mx-3">|</span>
            <span className="font-semibold">{product.name}</span>
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto grid grid-cols-1 gap-5 sm:grid-cols-2">
          <img src={product.img} className="sm:rounded-lg" alt="Counch" />
          <div className="mx-5 flex flex-col items-start justify-center gap-3">
            <h2 className="text-4xl font-semibold">{product.name}</h2>
            <p className="text-2xl text-gray-500">{product.price}</p>
            <p>{product.description}</p>
            <div className="flex flex-wrap items-start gap-3">
              <div className="flex items-center gap-2 rounded-lg border-2 border-black">
                <button
                  onClick={() =>
                    setQuantity((prevQuantity) =>
                      quantity > 1 ? prevQuantity - 1 : (prevQuantity = 1),
                    )
                  }
                  className="cursor-pointer px-3 py-2 duration-300 hover:bg-black hover:text-white"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={() =>
                    setQuantity((prevQuantity) => prevQuantity + 1)
                  }
                  className="cursor-pointer px-3 py-2 duration-300 hover:bg-black hover:text-white"
                >
                  +
                </button>
              </div>
              <button className="btn__outline--black">Add to cart</button>
              <button className="btn__outline--black">+ Compare</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
