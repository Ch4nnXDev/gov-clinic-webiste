import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import articleRoutes from "./routes/articleRoutes";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api", articleRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is Running on Port" + process.env.PORT)
});
