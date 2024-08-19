import { Request, Response } from "express";
import { CreateProductsService } from "../../Services/products/CreateProductsService";
import fs from "fs";

class CreateProductsController {
  async handle(req: Request, res: Response) {
    const product = req.body;
    const image = req.file;
    if (!image) {
      return res.status(400).json({ message: "Imagem não encontrada" });
    }
    const imageBuffer = fs.readFileSync(image.path);
    const imageBase64 = imageBuffer.toString("base64");
    const newProduct = {
      ...product,
      imageBase64: imageBase64,
    };
    const createProductsService = new CreateProductsService();
    await createProductsService.execute(newProduct);
    return res.json({ message: "Produto Criado com sucesso" });
  }
}

export { CreateProductsController };
