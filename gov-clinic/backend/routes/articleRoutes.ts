import express from "express";
import { getArticleByIdController, getAllArticlesController, createArticleController, updateArticleController } from "../controllers/articleController.js";

const router = express.Router();

router.get("/articles/:id", getArticleByIdController);
router.get("/articles", getAllArticlesController);
router.post("/articles", createArticleController);
router.put("/articles/:id", updateArticleController);

export default router;