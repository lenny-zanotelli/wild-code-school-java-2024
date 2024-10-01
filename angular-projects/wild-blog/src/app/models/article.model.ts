export interface Article {
  id: number;
  title: string;
  slug: string;
  author: string;
  content: string;
  image: string;
  isPublished: boolean;
  comment: string;
  likes: number;
}
