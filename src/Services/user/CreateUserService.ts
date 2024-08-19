import { hash } from "bcryptjs";
import AppError from "../../errors/AppErrors";
import prismaClient from "../../prisma/Client";
import { CreateUser } from "../../types/user";

class CreateUserService {
  async execute(user: CreateUser) {
    const { email, password } = user;
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });
    const passwordHash: string = await hash(password, 8);
    if (userAlreadyExists) throw new AppError("Email ja cadastrado", 400);
    const newUser = await prismaClient.user.create({
      data: {
        name: user.name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    if (!newUser) throw new AppError("Erro ao criar o usuário", 400);
    return newUser;
  }
}
export { CreateUserService };
