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
        <h2>Sobre nós</h2>
        <div>
          <p>
            O nosso projeto nasce com o propósito de divulgar a rica tradição intelectual
            protestante ainda tão desconhecida no nosso país.
          </p>
          <p>
            O protestantismo vinha mantendo-se fora das discussões e acreditamos que nós,
            protestantes, precisamos nos envolver no embate cultural, mostrando a força de
            uma tradição sólida e pungente que tanto pode nos ajudar a compreender os problemas
            culturais e espirituais que enfrentamos em nosso país.
          </p>
          <p>
            Para isso trabalharemos na promoção de seminários, eventos, palestras e na
            tradução de obras, textos e vídeos. Acreditamos que o senhorio de Cristo está
            sobre todas as coisas, tanto sobre as relativas à teologia, à piedade e a santidade,
            como sobre à cultura e a inteligência de uma nação.
          </p>
          <p>
            Nosso propósito é estar a serviço
            da igreja de Cristo e do seu reino, levando cativo todo pensamento à obediência
            de Cristo (2 Co 10:5b).
          </p>
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
