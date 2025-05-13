import connectDB from "@/lib/dbConnect";
import BrandModel from "@/model/Brand.model";

export async function POST(request: Request) {
  await connectDB();
  try {
    const { name, description, imageUrl } = await request.json();
    const existingBrand = await BrandModel.find({ name });
    if (existingBrand.length > 0) {
      return Response.json(
        {
          message: "Brand already exists",
          success: false,
        },
        { status: 400 }
      );
    }
    const brand = await BrandModel.create({
      name,
      description,
      imageUrl,
    });
    return Response.json(
      {
        message: "Brand created successfully",
        success: true,
        brand,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("error registering user", error);
    return Response.json(
      {
        success: false,
        message: "Error creating new brand",
      },
      {
        status: 500,
      }
    );
  }
}
