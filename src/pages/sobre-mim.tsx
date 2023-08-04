import React from 'react';

import { GetStaticProps } from 'next';

// import { IBlogGalleryProps } from '../blog/BlogGallery';
import { Content } from '../content/Content';
import { ContentBorder } from '../content/ContentBorder';
// import { Hero } from '../hero/Hero';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { RightSidebar } from '../templates/RightSidebar';
import { Config } from '../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../utils/Content';

type IIndexProps = {
  // gallery: IBlogGalleryProps;
  categoryCollection: [string, PostItems[]][];
};

const Index = (props: IIndexProps) => (
  <RightSidebar
    meta={<Meta title={Config.title} description={Config.description} />}
    // hero={<Hero title={Config.title} description={Config.description} />}
    categoryCollection={props.categoryCollection}
  >
    <ContentBorder>
      <Content>
        <h2>Sobre mim</h2>
        <div>
          <p>Eu sou .</p>
          <p>Tento .</p>
        </div>
      </Content>
    </ContentBorder>
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
