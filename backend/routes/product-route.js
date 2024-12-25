import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product-controller.js";

const router = express.Router();


router.post("/", createProduct );

router.put("/:id", updateProduct );

router.get("/", getProducts);

router.delete("/:id", deleteProduct );

export default router;