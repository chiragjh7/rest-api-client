import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DBConnect from "./configs/DatabaseConnection.js";
import { ProductRoute } from "./routes/ProductRouter.js";

// bootstrap function to start the server, this is the entry point of the application
const bootstrap = async () => {
  const app = express();
  dotenv.config();
  app.use(cors());
  const PORT = process.env.PORT;
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  DBConnect();

  app.use("/api/product", ProductRoute);

  try {
    await app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
bootstrap();
