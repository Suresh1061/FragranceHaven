import mongoose, { Schema, Document } from 'mongoose';

export interface ProductType extends Document {
     name: string;
     images: string[];
     smallDescription: string;
     largeDescription: string;
     price: number;
}

const ProductSchema: Schema = new Schema({
     name: { type: String, required: true },
     images: { type: [String], required: true },
     smallDescription: { type: String, required: true },
     largeDescription: { type: String, required: true },
     price: { type: Number, required: true },
});

const Product = mongoose.model<ProductType>('Product', ProductSchema);

export default Product;