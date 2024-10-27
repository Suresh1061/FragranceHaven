import { Document } from 'mongoose';
import mongoose, { Schema } from "mongoose";

// Review Interface
export interface ReviewType {
     rating: number;
     comment: string;
}

// Product Review Interface
export interface ProductReviewType extends Document {
     product_id: Schema.Types.ObjectId;
     reviews: ReviewType[];
}

// Review Schema
const reviewSchema = new Schema<ReviewType>({
     rating: { type: Number, required: true },
     comment: { type: String, required: true },
}, { _id: false });

// Product Review Schema
const productReviewSchema = new Schema<ProductReviewType>({
     product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
     reviews: [reviewSchema]
}, { timestamps: true });

// Models
const ProductReview = mongoose.model<ProductReviewType>("ProductReview", productReviewSchema);

export default ProductReview;
