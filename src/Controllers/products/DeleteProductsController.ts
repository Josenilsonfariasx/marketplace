import { Request, Response } from "express";
import prismaClient from "../../prisma/Client";

class DeleteProductsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    await prismaClient.product.delete({
      where: {
        id,
      },
    });
    return res.json("Produto deletado com sucesso!");
  }
}

export { DeleteProductsController };
