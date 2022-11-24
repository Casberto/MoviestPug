const app = require("./app");

// Error handler

const server = app.listen(8080, () =>
  console.log("O servidor está ativo na porta 8080")
);

// Exception handler
