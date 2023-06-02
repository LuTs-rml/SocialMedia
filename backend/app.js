require("dotenv").config();
const swaggerFile = require("./swagger/swagger_output.json");
const routes = require("./src/routes/index.routes.js");
const swaggerUi = require("swagger-ui-express");
const db = require("./src/config/db.js");
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const app = express();

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(cors());
routes(app);

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}
db.on(
  "error",
  console.error.bind("Houve um erro na conexão com o banco de dados")
);
db.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso!");
});

module.exports = app;
