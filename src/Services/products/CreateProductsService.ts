import AppError from "../../errors/AppErrors";
import prismaClient from "../../prisma/Client";
import { CreateProduct } from "../../types/products";

class CreateProductsService {
  async execute(product: CreateProduct) {
    const productAlreadyExists = await prismaClient.product.findFirst({
      where: {
        name: product.name,
      },
    });

    if (productAlreadyExists) throw new AppError("Produto já existe", 400);

    const price = parseFloat(product.price.toString());
    const quantity = product.quantity ? parseInt(product.quantity.toString(), 10) : 0;

    const newProduct = await prismaClient.product.create({
      data: {
        ...product,
        price,
        quantity,
      },
    });

    if (!newProduct) throw new AppError("Erro ao criar o produto", 400);

    return newProduct;
  }
}

export { CreateProductsService };
