const express = require('express');
const cors = require('cors');

const tiposRouter = require("./routes/tipos.routes");
const usersRouter = require("./routes/usuarios.routes");
const pedidosRouter = require("./routes/pedidos.routes");
const produtosRouter = require ("./routes/produtos.routes");
const itensRouter = require("./routes/itens.routes");
const pagamentosRouter = require("./routes/pagamentos.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/tipos", tiposRouter);
app.use("/usuarios", usersRouter);
app.use("/pedidos", pedidosRouter);
app.use("/produtos", produtosRouter);
app.use("/itens", itensRouter);
app.use("/pagamentos", pagamentosRouter);

module.exports = app;