import BrandModel from "@/model/Brand.model";
import connectDB from "@/lib/dbConnect";

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const { id } = await params;

    const brand = await BrandModel.findByIdAndDelete(id);

    if (!brand) {
      return Response.json(
        {
          message: "Brand not found",
          success: false,
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        message: "Brand deleted successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Error deleting brand",
        success: false,
      },
      { status: 500 }
    );
  }
}
