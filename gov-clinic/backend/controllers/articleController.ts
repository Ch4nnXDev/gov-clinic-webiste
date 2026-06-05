import express from 'express';
import { createArticle, getAllArticles, getArticleById, updateArticle } from '../services/articleService';

export const getArticleByIdController = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const user = await getArticleById(parseInt(id));
    if (user) {
        res.status(200).json({user, message: "Article Found Successfully"});

    } else {
        res.status(500).json({message: "Article Not Found"});
    }

}

export const getAllArticlesController = async (req: express.Request, res: express.Response) => {
    const users = await getAllArticles();
    if (users) {
        res.status(200).json({users, message: "Articles Found Successfully"});

    } else {
        res.status(500).json({message: "Articles Not Found"});
    }
}

export const createArticleCOntroller = async (req: express.Request, res: express.Response) => {
    const user = await createArticle(req.body.title, req.body.content, req.body.author, req.body.readTime);
    if (user) {
        res.status(200).json({user, message: "Article Created Successfully"});

    } else {
        res.status(500).json({message: "Article Creation Failed"});
    }
}

export const updateArticleController = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const user = await updateArticle(parseInt(id), req.body.title, req.body.content, req.body.author, req.body.readTime);
    if (user) {
        res.status(200).json({user, message: "Article Updated Successfully"});

    } else {
        res.status(500).json({message: "Article Update Failed"});
    }
}