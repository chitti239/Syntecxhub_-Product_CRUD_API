const express = require("express");
const productRoutes = require("./product");
const fileRoutes = require("./file");

const router = express.Router();

router.use("/products", productRoutes);
router.use("/files", fileRoutes);

module.exports = router;