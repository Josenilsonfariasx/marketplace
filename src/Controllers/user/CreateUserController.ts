import { Request, Response } from "express";
import { CreateUserService } from "../../Services/user/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const user = req.body;
    const createUserService = new CreateUserService();
    const newUser = await createUserService.execute(user);
    return res.json(newUser);
  }
}

export { CreateUserController };
