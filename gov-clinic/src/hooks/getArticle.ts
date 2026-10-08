import {contentfulClient} from '../lib/contentfulClient';
import ArticleSkeleton from '@/app/types/article';

const getArticle = async (slug: string) => {
  const response = await contentfulClient.getEntries<ArticleSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1
  });
  return response.items[0];
}




const getArticles = async () => {
    const reponse = await contentfulClient.getEntries<ArticleSkeleton>({
        content_type: 'blogPost',
        locale: "en-US",
    });
    return reponse.items;
}

export { getArticle, getArticles };