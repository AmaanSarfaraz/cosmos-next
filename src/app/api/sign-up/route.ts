import connectDB from "@/lib/dbConnect";
import AdminModel from "@/model/Admin.model";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await connectDB();

  try {
    const { fullName, email, password, phone } = await request.json();

    // Basic validation
    if (!email || !password || !phone) {
      return Response.json(
        {
          success: false,
          message: "Email, password, and phone are required",
        },
        { status: 400 }
      );
    }

    const existingAdmin = await AdminModel.findOne({ email });
    if (existingAdmin) {
      return Response.json(
        {
          success: false,
          message: "Admin already exists with this email",
        },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate verification code and expiry
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString(); // 6-digit code
    const verificationCodeExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    const admin = new AdminModel({
      fullName,
      email,
      password: hashedPassword,
      phone,
      verificationCode,
      verificationCodeExpiry,
    });

    await admin.save();

    return Response.json(
      {
        success: true,
        message: "Admin registered successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return Response.json(
      {
        success: false,
        message: "Something went wrong during registration",
      },
      { status: 500 }
    );
  }
}
