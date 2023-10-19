import "dotenv/config";
// import { MercadoPagoConfig, Payment } from "mercadopago";
import mercadopago from "mercadopago";

//token de usuario de prueba
//FacundoMajda-IPFDev > VendedorTest-ecommerce_test <- de esta ultima instancia sale el token
export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MP,
  });
  const { price, quantity, title } = req.body;
  const response = await mercadopago.preferences.create({
    items: [
      {
        title: title,
        unit_price: Number(price),
        currency_id: "ARS",
        quantity: Number(quantity),
      },
    ],
    back_urls: {
      success: `${process.env.FRONTEND_URL}/success`,
      failure: `${process.env.FRONTEND_URL}/failure`,
      pending: "",
    },
    auto_return: "approved",
  });
  if (!response.body.id) {
    return res.status(500).json({
      message: "No se pudo crear la preferencia",
    });
  }
  return res.status(200).json({
    PaymentId: response.body.id,
  });
};
