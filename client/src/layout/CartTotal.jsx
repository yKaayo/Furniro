const CartTotal = () => {
  const columns = [
    { name: "Product" },
    { name: "Price" },
    { name: "Quantity" },
    { name: "Subtotal" },
  ];
  return (
    <section className="container mx-auto grid gap-5 py-10 md:grid-cols-[70%_30%]">
      <div className="bg-secundary-white">
        <ul className="flex justify-between gap-3 px-10">
          {columns.map((column) => (
            <li key={column.name} className="flex flex-col py-5 font-semibold">
              {column.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-secundary-white px-10 py-5">
        <h2 className="text-3xl font-semibold">Cart Totals</h2>

        <div className="flex items-center justify-between">
          <p className="font-semibold">Subtotal</p>
          <p className="font-semibold">R$30</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">R$30</p>
        </div>

        <button>Check out</button>
      </div>
    </section>
  );
};

export default CartTotal;
