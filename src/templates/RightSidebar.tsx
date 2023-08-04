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
                      <a className="text-blue-600 hover:border-b-2 hover:border-blue-600">
                        {elt.title}
                      </a>
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
                    <a className="flex justify-between hover:text-gray-600">
                      <div>{elt[0]}</div>

                      <div>{elt[1].length}</div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarBlock>

          <SidebarBlock title="Info relevante">
            <>
              <div>
                <p>Digdin, digdin, digdin</p>
                <p>Digdin, digdin, digdin</p>
                <p>Digdin, digdin</p>
                <p>Digdin, digdin, digdin</p>
                <p>Digdin, digdin, digdin</p>
                <p>Digdin, digdin</p>
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
