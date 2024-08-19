import AppError from "../../errors/AppErrors";
import prismaClient from "../../prisma/Client";
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) throw new AppError("Usuario nao encontrado", 401);

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new AppError("User/Password incorrect");

    const token = sign(
      {
        username: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET!,
      {
        subject: user.id,
        expiresIn: "10d",
      }
    );
    return {
      id: user.id,
      username: user.name,
      email: user.email,
      token: token,
    };
  }
}

export { AuthUserService };
