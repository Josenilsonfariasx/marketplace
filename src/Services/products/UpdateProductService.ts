import AppError from "../../errors/AppErrors";
import prismaClient from "../../prisma/Client";

interface IRequest {
  id: string;
  quantity: number;
}

class UpdateProductService {
  async execute({ id, quantity }: IRequest) {
    const product = await prismaClient.product.findUnique({
      where: {
        id,
      },
    });
    if (!product) throw new AppError("Produto não encontrado", 404);
    const updatedProduct = await prismaClient.product.update({
      where: {
        id,
      },
      data: {
        quantity,
      },
    });
    return updatedProduct;
  }
}
export { UpdateProductService };
