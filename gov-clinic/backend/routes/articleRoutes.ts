import express from "express";
import { getArticleByIdController, getAllArticlesController, createArticleController, updateArticleController, deleteAllArticlesController } from "../controllers/articleController.js";

const router = express.Router();

router.get("/articles/:id", getArticleByIdController);
router.get("/articles", getAllArticlesController);
router.get("/articles/delete", deleteAllArticlesController);
router.post("/articles", createArticleController);
router.put("/articles/:id", updateArticleController);

export default router;