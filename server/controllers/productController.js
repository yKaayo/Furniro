export const getProducts = () => {
  return { message: "Produtos route working!" };
};

export const createProducts = (req, rep) => {
  try {
    const name = req.body.name;

    rep.status(201).send({
      success: true,
      message: `Produto ${name} criado com sucesso`,
    });
  } catch (error) {
    rep.status(500).send({
      success: false,
      message: "Erro ao criar produto",
      error: error.message,
    });
  }
};
