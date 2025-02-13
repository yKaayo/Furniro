const CartTotal = () => {
  const columns = [
    { name: "Product" },
    { name: "Price" },
    { name: "Quantity" },
    { name: "Subtotal" },
  ];
  return (
    <section className="container mx-auto py-10">
      <div className="bg-secundary-white">
        <ul className="flex justify-center gap-3 px-10">
          {columns.map((column) => (
            <li key={column.name} className="flex flex-col py-5 font-semibold">
              {column.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CartTotal;
