import { Request, Response } from "express";
import { UpdateProductService } from "../../Services/products/UpdateProductService";

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { quantity } = req.body;
    const { id } = req.params;
    const updateProductService = new UpdateProductService();
    await updateProductService.execute({ id, quantity });
    return res.json("Produto atualizado com sucesso!");
  }
}

export { UpdateProductController };
