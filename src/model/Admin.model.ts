import mongoose, { Schema } from "mongoose";

export interface Admin extends Document {
  fullName: string;
  email: string;
  password: string;
  phone: string;
  verificationCode: string;
  verificationCodeExpiry: Date;
}

const AdminSchema: Schema<Admin> = new Schema({
  fullName: {
    type: String,
    required: [true, "please enter your fullname"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [8, "password must be atleast 8 characters"],
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    length: 10,
  },
  verificationCode: {
    type: String,
    required: [true, "verification code is required"],
  },
  verificationCodeExpiry: {
    type: Date,
  },
});

const AdminModel =
  (mongoose.models.Admin as mongoose.Model<Admin>) ||
  mongoose.model<Admin>("Admin", AdminSchema);

export default AdminModel;
