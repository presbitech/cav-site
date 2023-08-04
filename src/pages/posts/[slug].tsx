import React from 'react';

// import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Content } from '../../content/Content';
import { ContentBorder } from '../../content/ContentBorder';
// import { Hero } from '../../hero/Hero';
import { Meta } from '../../layout/Meta';
import { RightSidebar } from '../../templates/RightSidebar';
// import { Config } from '../../utils/Config';
import {
  getAllPosts, getPostBySlug, PostItems, getCategoryCollection,
} from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string;
  image: string;
  content: string;
  recentPosts: PostItems[];
  categoryCollection: [string, PostItems[]][];
  author: string;
};

const DisplayPost = (props: IPostProps) => (
  <RightSidebar
    meta={(
      <Meta
        title={props.title}
        description={props.description}
        post={{
          image: props.image,
          date: props.date,
          modified_date: props.modified_date,
        }}
      />
    )}
    // hero={(
    //   <Hero
    //     title={props.title}
    //     description={`By ${Config.author} · ${format(new Date(props.date), 'LLLL d, yyyy')}`}
    //   />
    // )}
    recentPosts={props.recentPosts}
    categoryCollection={props.categoryCollection}
  >
    <ContentBorder>
      <Content>
        <h1>{props.title}</h1>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <br />
        <br />
        <div>
          Por:
          {props.author}
        </div>
        <div>
          Publicado em:
          {props.date}
        </div>
      </Content>
    </ContentBorder>
  </RightSidebar>
);

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({ params }) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'author',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
  ]);
  const content = await markdownToHtml(post.content || '');

  const recentPosts = getAllPosts(['slug', 'title', 'date']).slice(0, 5);

  return {
    props: {
      title: post.title,
      description: post.description,
      author: post.author,
      date: post.date,
      modified_date: post.modified_date,
      image: post.image,
      content,
      recentPosts,
      categoryCollection: getCategoryCollection(['slug', 'tags']),
    },
  };
};

export default DisplayPost;
