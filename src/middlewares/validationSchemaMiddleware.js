export function validationSchemaMiddleware(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const erros = error.details.map((detail) => detail.message);
      return res.status(422).send(erros);
    }

    next();
  };
}
