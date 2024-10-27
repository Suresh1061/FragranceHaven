import { Request, Response } from "express";
import Review, { ProductReviewType, ReviewType } from "../models/review.model";
import mongoose from "mongoose";

// Get all reviews
export const getAllReviews = async (req: Request, res: Response): Promise<any> => {
     try {
          const { product_id } = req.params;

          if (!product_id) {
               return res.status(400).json({ message: "Product ID is required" });
          }

          if (!mongoose.Types.ObjectId.isValid(product_id)) {
               return res.status(400).json({ message: "Invalid product ID" });
          }

          const reviews: ProductReviewType[] = await Review.aggregate([
               { $match: { product_id: new mongoose.Types.ObjectId(product_id) } },
               { $unwind: "$reviews" },
               { $sort: { "createdAt": -1 } },
               {
                    $group: {
                         _id: "$product_id",
                         reviews: {
                              $push: "$reviews"
                         }
                    }
               },
               { $addFields: { product_id: "$_id" } },
               { $project: { _id: 0 } }
          ]);

          if (!reviews || reviews.length === 0) {
               return res.status(200).json({
                    message: "No reviews found for this product",
                    reviews: []
               });
          }

          return res.status(200).json({
               success: true,
               reviews: reviews[0].reviews,
               message: "All reviews fetched successfully"
          });
     } catch (error) {
          console.error("Error while fetching reviews:", error);
          return res.status(500).json({ message: "Internal server error" });
     }
};


// Create a new review
export const createReview = async (req: Request, res: Response): Promise<any> => {
     try {
          const { product_id, rating, comment } = req.body

          if (!product_id || !rating || !comment) {
               return res.status(400).json({ message: "All fields are required" });
          }

          if (!mongoose.Types.ObjectId.isValid(product_id)) {
               return res.status(400).json({ message: "Invalid product ID" });
          }

          const review = await Review.findOneAndUpdate(
               { product_id },
               { $push: { reviews: { rating, comment } } },
               { new: true, upsert: true } // return new doc and create if doesn't exist
          );

          if (!review) {
               return res.status(400).json({ message: "Failed to create review" });
          }

          return res.status(201).json({
               success: true,
               message: "Review created successfully"
          });
     } catch (error) {
          console.error("Error while creating review:", error);
          return res.status(500).json({ message: "Internal server error" });
     }
};