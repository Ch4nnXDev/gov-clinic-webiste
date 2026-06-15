import express from 'express';
import { createArticle, getAllArticles, getArticleById, updateArticle, deleteAllArticles } from '../services/articleService.js';

export const getArticleByIdController = async (req: express.Request, res: express.Response) => {
    const id  = req.params.id as string;
    const user = await getArticleById(parseInt(id));
    if (user) {
        res.status(200).json({user, message: "Article Found Successfully"});

    } else {
        res.status(500).json({message: "Article Not Found"});
    }

}

export const getAllArticlesController = async (req: express.Request, res: express.Response) => {
    const articles = await getAllArticles();
    if (articles) {
        res.status(200).json({articles, message: "Articles Found Successfully"});

    } else {
        res.status(500).json({message: "Articles Not Found"});
    }
}

export const createArticleController = async (req: express.Request, res: express.Response) => {
    const user = await createArticle(req.body.title, req.body.content, req.body.author, req.body.readTime);
    if (user) {
        res.status(200).json({user, message: "Article Created Successfully"});

    } else {
        res.status(500).json({message: "Article Creation Failed"});
    }
}

export const updateArticleController = async (req: express.Request, res: express.Response) => {
    const id  = req.params.id as string;
    const user = await updateArticle(parseInt(id), req.body.title, req.body.content, req.body.author, req.body.readTime);
    if (user) {
        res.status(200).json({user, message: "Article Updated Successfully"});

    } else {
        res.status(500).json({message: "Article Update Failed"});
    }
}

export const deleteAllArticlesController = async (req: express.Request, res: express.Response) => {
    const deletedUsers = await deleteAllArticles();
    if (deletedUsers) {
        res.status(200).json({message: "users deleted", deletedUsers});
    } else {
        res.status(500).json({message: "Failed to Delete All Articles"});
    }

}