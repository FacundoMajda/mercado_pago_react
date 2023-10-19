require("dotenv/config");
const mercadopago = require("mercadopago");

exports.createPaymentPreference = async (req, res) => {
  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MP,
  });

  const { transaction_amount, description, payment_method_id, email } = req.body;

  const preference = {
    items: [
      {
        title: description,
        unit_price: Number(transaction_amount),
        currency_id: "ARS",
        quantity: 1, // Puedes ajustar la cantidad según tus necesidades
      },
    ],
    back_urls: {
      success: `${process.env.FRONTEND_URL}/success`,
      failure: `${process.env.FRONTEND_URL}/failure`,
      pending: "",
    },
    auto_return: "approved",
    payment_methods: {
      excluded_payment_methods: [{ id: payment_method_id }],
      excluded_payment_types: [{ id: "ticket" }], // Puedes ajustar las exclusiones según tus necesidades
    },
    payer: {
      email,
    },
  };

  mercadopago.preferences
    .create(preference)
    .then((response) => {
      if (response.body.id) {
        return res.status(200).json({
          paymentPreferenceId: response.body.id,
        });
      } else {
        return res.status(500).json({
          message: "No se pudo crear la preferencia de pago",
        });
      }
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        message: "Error al crear la preferencia de pago",
      });
    });
};
