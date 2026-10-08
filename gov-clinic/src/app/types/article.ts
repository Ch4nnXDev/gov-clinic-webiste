import type {
  EntryFieldTypes,
  EntrySkeletonType,
} from "contentful";

type ArticleSkeleton = EntrySkeletonType<
  {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    image: EntryFieldTypes.AssetLink;
    readTime: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
  },
  "blogPost"
>;

export default ArticleSkeleton;