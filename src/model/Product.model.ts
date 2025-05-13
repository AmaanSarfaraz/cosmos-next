import mongoose, { Types, Document, Schema } from "mongoose";

export interface Product extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  brand: Types.ObjectId;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema<Product> = new Schema(
  {
    name: {
      type: String,
      required: [true, "please enter product name"],
    },
    description: {
      type: String,
      required: [true, "please enter product description"],
    },
    price: {
      type: Number,
      required: [true, "please enter product price"],
    },
    category: {
      type: String,
      required: [true, "please enter product category"],
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: [true, "please enter product brand"],
    },
    images: [
      {
        type: String,
        required: [true, "please enter product image"],
      },
    ],
  },
  { timestamps: true }
);

const ProductModel =
  (mongoose.models.Product as mongoose.Model<Product>) ||
  mongoose.model<Product>("Product", ProductSchema);

export default ProductModel;
