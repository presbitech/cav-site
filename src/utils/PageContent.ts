import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const pagesDirectory = join(process.cwd(), '_pages');

export type PageItems = {
  title: string;
  description: string;
  image: string;
  slug: string;
  content: string;
  [key: string]: string | string[];
};

export function getPageSlugs() {
  return fs.readdirSync(pagesDirectory);
}

export function getPageBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(pagesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: PageItems = {
    title: '',
    description: '',
    image: '',
    slug: '',
    content: '',
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPages(fields: string[] = []) {
  const slugs = getPageSlugs();
  const pages = slugs
    .map((slug) => getPageBySlug(slug, fields));
  return pages;
}
