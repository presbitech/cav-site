import React, { ReactNode } from 'react';

// import Link from 'next/link';

import { Footer } from '../footer/Footer';
import { FooterBlocks } from '../footer/FooterBlocks';
// import { FooterIconList } from '../footer/FooterIconList';
import { FooterThreeColumns } from '../footer/FooterThreeColumns';
import { Navbar } from '../navigation/Navbar';

type IMainProps = {
  meta: ReactNode;
  // hero: ReactNode;
  children: ReactNode;
};

const Base = (props: IMainProps) => (
  <div className="antialiased w-full text-black">
    {props.meta}
    <Navbar>
      <></>
    </Navbar>
    {props.children}
    <Footer>
      <FooterThreeColumns
        block2={(
          <FooterBlocks title="10 mandamentos">
            <li>
              <a>Tema só a Deus.</a>
            </li>
            <li>
              <a>Sirva a Deus nos termos de Deus.</a>
            </li>
            <li>
              <a>Honre sua palavra, Não suje o nome de Deus.</a>
            </li>
            <li>
              <a>Trabalhe 6 dias, Descanse e confie em Deus.</a>
            </li>
            <li>
              <a>Honre seus autores.</a>
            </li>
            <li>
              <a>Não assassine.</a>
            </li>
            <li>
              <a>Não destrua a família.</a>
            </li>
            <li>
              <a>Não roube.</a>
            </li>
            <li>
              <a>Não calunie quem quer que seja.</a>
            </li>
            <li>
              <a>Não tenha coração de pedra, mas de carne.</a>
            </li>
          </FooterBlocks>
        )}
        block3={(
          <FooterBlocks title="">
            <br />
          </FooterBlocks>
        )}
      >
        <FooterBlocks title="Quem somos">
          <div>Marciel Félix e Outros</div>
        </FooterBlocks>
      </FooterThreeColumns>
    </Footer>
  </div>
);

export { Base };
