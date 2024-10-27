import { Request, Response } from "express";
import Product from "../models/product.model";
import { Document } from "mongoose";
import { ProductType } from "../models/product.model";

export const getAllProducts = async (req: Request, res: Response): Promise<any> => {
     try {
          const products = await Product.find({});

          if (!products || products.length === 0) {
               return res.status(404).json({ message: "Products not found" });
          }

          return res.status(200).json({
               success: true,
               products,
               message: "All products fetched successfully"
          });
     } catch (error) {
          console.error("Error while fetching products:", error);
          return res.status(500).json({ message: "Internal server error" });
     }
};

export const getProductById = async (req: Request, res: Response): Promise<any> => {
     try {
          const { id } = req.params;
          const product: Document<ProductType> | null = await Product.findById(id);

          if (!product) {
               return res.status(404).json({ message: "Product not found" });
          }

          return res.status(200).json({
               success: true,
               product,
               message: "Product fetched successfully"
          });
     } catch (error) {
          console.error("Error while fetching product by id: ", error);
          return res.status(500).json({ message: "Internal server error" });
     }
};