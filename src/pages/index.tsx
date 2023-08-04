import React from 'react';

import { GetStaticProps } from 'next';

// import { Hero } from '../hero/Hero';
import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { RightSidebar } from '../templates/RightSidebar';
import { Config } from '../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../utils/Content';

type IIndexProps = {
  categoryCollection: [string, PostItems[]][];
  gallery: IBlogGalleryProps;
};
const Index = (props: IIndexProps) => (
  <RightSidebar
    meta={<Meta title={Config.title} description={Config.description} />}
    // hero={<Hero title={Config.title} description={Config.description} />}
    categoryCollection={props.categoryCollection}
  >
    <BlogGallery posts={props.gallery.posts} pagination={props.gallery.pagination} />
  </RightSidebar>
);

export const getStaticProps: GetStaticProps<IIndexProps> = async () => {
  const posts = getAllPosts(Config.post_fields);
  const pagination: IPaginationProps = {};

  if (posts.length > Config.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      gallery: {
        posts: posts.slice(0, Config.pagination_size),
        pagination,
      },
      categoryCollection: getCategoryCollection(['slug', 'tags']),
    },
  };
};

export default Index;
