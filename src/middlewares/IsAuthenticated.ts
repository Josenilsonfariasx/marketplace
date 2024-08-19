import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    return res.status(500).json({ error: "JWT secret is not defined" });
  }

  try {
    const { sub } = verify(token, jwtSecret) as Payload;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
