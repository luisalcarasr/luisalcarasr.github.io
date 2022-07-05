export interface MarkdownAttributes {
  title: string;
  description: string;
  tags: string;
  createdAt: string;
  slug: string
}

export interface Markdown {
  attributes: MarkdownAttributes;
  html: string;
}