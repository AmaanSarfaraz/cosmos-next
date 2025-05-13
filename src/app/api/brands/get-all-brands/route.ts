import connectDB from "@/lib/dbConnect";
import BrandModel from "@/model/Brand.model";

export async function GET(request: Request) {
  await connectDB();
  try {
    const brands = await BrandModel.find();
    return Response.json(
      {
        message: "Brands fetched successfully",
        Total_Brands: brands.length,
        success: true,
        brands,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("error fetching brands", error);
    return Response.json(
      {
        success: false,
        message: "Error fetching brands",
      },
      {
        status: 500,
      }
    );
  }
}
