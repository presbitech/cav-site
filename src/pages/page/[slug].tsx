import React from 'react';

// import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';

import { Content } from '../../content/Content';
import { ContentBorder } from '../../content/ContentBorder';
// import { Hero } from '../../hero/Hero';
import { Meta } from '../../layout/Meta';
import { NoSidebar } from '../../templates/NoSidebar';
// import { Config } from '../../utils/Config';
import { markdownToHtml } from '../../utils/Markdown';
import {
  getAllPages, getPageBySlug,
} from '../../utils/PageContent';

type IPageUrl = {
  slug: string;
};

type IPageProps = {
  title: string;
  description: string;
  content: string;
};

const DisplayPage = (props: IPageProps) => (
  <NoSidebar
    meta={(
      <Meta
        title={props.title}
        description={props.description}
      />
    )}
  >
    <ContentBorder>
      <Content>
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
        <br />
        <br />
      </Content>
    </ContentBorder>
  </NoSidebar>
);

export const getStaticPaths: GetStaticPaths<IPageUrl> = async () => {
  const pages = getAllPages(['slug']);

  return {
    paths: pages.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPageProps, IPageUrl> = async ({ params }) => {
  const page = getPageBySlug(params!.slug, [
    'title',
    'description',
    'image',
    'content',
    'slug',
  ]);
  const content = await markdownToHtml(page.content || '');

  return {
    props: {
      title: page.title,
      description: page.description,
      content,
    },
  };
};

export default DisplayPage;
