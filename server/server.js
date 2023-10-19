require("dotenv/config");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
// const mercadopago = require("mercadopago");
const paymentRoutes = require("./routes/payment.routes.js");

const app = express();
const PORT = process.env.PORT || 666;
const URL = process.env.URL || "http://localhost:";

app.enable("trust proxy");
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(paymentRoutes);

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(PORT, () => {
  console.log(`listening on ${URL}${PORT}`);
});
