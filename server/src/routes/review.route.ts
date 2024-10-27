import { createReview, getAllReviews } from '../controller/review.controller';
import { Router } from "express";

const router = Router();

router.route("/:product_id").get(getAllReviews);
router.route("/add").post(createReview);

export default router