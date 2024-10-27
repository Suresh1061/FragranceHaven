import { getAllProducts, getProductById } from "../controller/product.conteroller";
import { Router } from "express";

const router = Router();

router.route("/").get(getAllProducts);
router.route("/:id").get(getProductById);

export default router;
