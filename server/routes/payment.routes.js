const { Router } = require("express");
const {
  createPaymentPreference,
  searchPayments,
  getPaymentById,
  updatePayment,
} = require("../controllers/payment.js");

const router = Router();

// Ruta para crear un pago
router.post("/create-order", createPaymentPreference);

// Ruta para buscar pagos
router.post("/search-payments", searchPayments);

// Ruta para obtener información de un pago por ID
router.get("/get-payment/:id", getPaymentById);

// Ruta para actualizar un pago
router.post("/update-payment", updatePayment);

// Otras rutas
router.get("/success", (req, res) => {
  // Lógica para la ruta "/success"
});

router.post("/webhook", (req, res) => {
  // Lógica para la ruta "/webhook"
});

module.exports = router;
