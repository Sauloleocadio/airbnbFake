const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@oministack-emg8y.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();

// GET , POST , PUT , DELETE
//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição,deletes)
//req.body =  Acessar o corpo da requisição (para criaçao e ediçao)
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
