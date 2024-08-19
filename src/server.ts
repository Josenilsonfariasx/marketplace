import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { routes } from "./routes/routes";
import { handleErrors } from "./middlewares/HandlErrorMiddleware";

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(handleErrors);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});
app.listen(3344, () => {
  console.log("Marketplace on!");
});
