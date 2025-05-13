import mongoose from "mongoose";
import { Document, Schema } from "mongoose";

export interface Brand extends Document {
  name: string;
  imageUrl: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const BrandSchema: Schema<Brand> = new Schema(
  {
    name: {
      type: String,
      required: [true, "please enter brand name"],
    },
    imageUrl: {
      type: String,
      required: [true, "please upload brand image"],
    },
    description: {
      type: String,
      required: [true, "please enter brand description"],
    },
  },
  { timestamps: true }
);

const BrandModel =
  (mongoose.models.Brand as mongoose.Model<Brand>) ||
  mongoose.model<Brand>("Brand", BrandSchema);

export default BrandModel;
