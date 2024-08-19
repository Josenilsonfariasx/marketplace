import AppError from "../../errors/AppErrors";
import prismaClient from "../../prisma/Client";

class GetProductByIdService {
  async execute(id: string) {
    const product = await prismaClient.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) throw new AppError("Produto não encontrado", 404);
    return product;
  }
}
export { GetProductByIdService };
