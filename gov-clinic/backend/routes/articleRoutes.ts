import express from "express";
import { getArticleByIdController, getAllArticlesController, createArticleCOntroller, updateArticleController } from "../controllers/articleController";

const router = express.Router();

router.get("/articles/:id", getArticleByIdController);
router.get("/articles", getAllArticlesController);
router.post("/articles", createArticleCOntroller);
router.put("/articles/:id", updateArticleController);

export default router;