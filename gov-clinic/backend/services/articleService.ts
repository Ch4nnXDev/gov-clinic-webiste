import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getArticleById = async (id: number) => {
    return prisma.article.findUnique({
        where: {
            id
        }
    });
}

export const getAllArticles = async () => {
    return prisma.article.findMany();
}

export const createArticle = async (title: string, content: string, author: string, readTime: number) => {
    return prisma.article.create({
        data: {
            title,
            content,
            author,
            readTime
        }
    });
}

export const updateArticle = async (id: number, title?: string, content?: string, author?: string, readTime?: number) => {
    return prisma.article.update({
        where: {
            id
        },
        data: {
            title,
            content,
            author,
            readTime
        }
    });
}

export const deleteArticle = async (id: number) => {
    return prisma.article.delete({
        where: {
            id
        }
    });
}       