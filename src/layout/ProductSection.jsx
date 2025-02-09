import { useLocation, useNavigate } from "react-router";

const Product = () => {
  const product = useLocation().state;
  const navigate = useNavigate()

  if (!product) {
    return (
      <div>
        <p className="pt-20">Página não encontrada!</p>
        <button className="btn--yellow" onClick={() => navigate(-1)}>Voltar</button>
      </div>
    );
  }

  return (
    <section className="bg-white pt-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        <img src={product.img} alt="Counch" />
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-semibold">{product.name}</h2>
          <p className="text-2xl text-gray-500">{product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Product;
