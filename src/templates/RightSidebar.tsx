import React, { ReactNode } from 'react';

import Link from 'next/link';

import { SidebarBlock } from '../sidebar/SidebarBlock';
// import { SidebarIconList } from '../sidebar/SidebarIconList';
import { PostItems } from '../utils/Content';
import { convertToSlug } from '../utils/Url';
import { Base } from './Base';

type IMainProps = {
  meta: ReactNode;
  // hero: ReactNode;
  recentPosts?: PostItems[];
  categoryCollection: [string, PostItems[]][];
  children: ReactNode;
};

const RightSidebar = (props: IMainProps) => (
  <Base meta={props.meta}>
    <div className="w-full bg-white text-black">
      <div className="max-w-screen-xl mx-auto flex flex-wrap">
        <div className="w-full md:w-2/3 md:px-3">{props.children}</div>

        <div className="w-full md:w-1/3 px-3">
          {props.recentPosts && (
            <SidebarBlock title="Mais recentes">
              <ul>
                {props.recentPosts.map((elt) => (
                  <li key={elt.slug} className="my-0">
                    <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
                      <div className="text-blue-600 hover:border-b-2 hover:border-blue-600">
                        {elt.title}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </SidebarBlock>
          )}

          <SidebarBlock title="Categorias">
            <ul>
              {props.categoryCollection.map((elt) => (
                <li key={elt[0]} className="py-1 border-b border-gray-400 last:border-none">
                  <Link href="/category/[name]" as={`/category/${convertToSlug(elt[0])}`}>
                    <div className="flex justify-between hover:text-gray-600">
                      <div>{elt[0]}</div>

                      <div>{elt[1].length}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarBlock>

          <SidebarBlock title="Sobre nós">
            <>
              <div>
                {/* link para a pagina quem somos */}
                <Link href="/sobre-nos">
                  <div className="text-blue-600 hover:border-b-2 hover:border-blue-600">
                    Quem somos
                  </div>
                </Link>
                {/* como ajudar */}
                <Link href="/como-ajudar">
                  <div className="text-blue-600 hover:border-b-2 hover:border-blue-600">
                    Como ajudar
                  </div>
                </Link>
              </div>
              {/* <SidebarIconList /> */}
            </>
          </SidebarBlock>
        </div>
      </div>
    </div>
  </Base>
);

export { RightSidebar };
