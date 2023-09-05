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
        {/* <h2>Como Ajudar</h2> */}
        <div>
          <h3>Contribuições financeiras</h3>
          <p>
            Não temos forma de contribuiçao financeira no momento.
          </p>
          <h3>Contribuições com seu trabalho</h3>
          <p>
            Hoje ainda não temos um protocolo definido para receber contrinuições ou ajuda.
            Porém elencamos aqui algumas formas de contribuir.
          </p>
          <p>
            Caso você tenha interesse de ajudar de uma destas formas,
            entre em contato com:
            <br />
            - Marciel Felix
            <br />
            - Alvaro Separovich
          </p>

          <h4>Traduções</h4>
          <ul>
            <li>Tradução de textos (artigos, posts, livros ...)</li>
            <li>Tradução de vídeos e legendas</li>
          </ul>

          <h4>Revisões</h4>
          <ul>
            <li>Revisão de textos (artigos, posts, livros ...)</li>
            <li>Revisão de vídeos e legendas</li>
          </ul>

          <h4>Edições</h4>
          <ul>
            <li>Edição de vídeos</li>
            <li>Edição de áudios (para podcasts)</li>
          </ul>

          <h4>Desenvolvimento</h4>
          <ul>
            <li>Desenvolvimento web</li>
            <li>Desenvolvimento de sistemas</li>
            <li>automações</li>
          </ul>
          <h4>Design</h4>
          <ul>
            <li>Design gráfico/web</li>
            <li>Design de imgs para instagram</li>
          </ul>
          <h4>Gerenciamento de redes sociais</h4>
          <ul>
            <li>Gerenciamento de redes sociais</li>
            <li>Planejamento estratégico</li>
            <li>Produção de conteúdo</li>
          </ul>

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
