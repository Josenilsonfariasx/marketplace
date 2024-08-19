import { Request, Response } from "express";
import { GetProductByIdService } from "../../Services/products/GetProductByIdService";

class GetProductByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const getProductByIdService = new GetProductByIdService();
    const product = await getProductByIdService.execute(id);
    return res.json(product);
  }
}

export { GetProductByIdController };
