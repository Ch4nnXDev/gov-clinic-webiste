import { contentfulClient } from '../../../lib/contentfulClient';


export async function GET() {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
  });

  return Response.json(response.items);
}

