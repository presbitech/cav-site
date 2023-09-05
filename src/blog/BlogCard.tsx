import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

type IBlogCardProps = {
  title: string;
  description: string;
  date: string;
  // image: string;
  slug: string;
  // tags: string[];
};

const BlogCard = (props: IBlogCardProps) => (
  <div className="overflow-hidden">
    <Link href="/posts/[slug]" as={`/posts/${props.slug}`}>
      <div className=" h-full">
        {/* <img className="w-full" src={props.image} alt={`Preview ${props.title}`} /> */}

        <div className="px-3 py-2 flex-grow">
          <h3 className="font-bold text-xl text-gray-800">{props.title}</h3>
          <span className="text-gray-500 text-xs mb-2">
            {format(new Date(props.date), 'LLL d, yyyy')}
          </span>
          <span> - </span>
          <span className="text-gray-700">{props.description}</span>
        </div>

        {/* <div className="px-6 py-4 flex flex-wrap">
          {props.tags.map((tag) => (
            <div key={tag} className="  text-sm font-semibold text-gray-700 mr-2 mb-2">
              {`#${tag}`}
            </div>
          ))}
        </div> */}
      </div>
    </Link>

    <style jsx>
      {`
        a:focus {
          outline-offset: -1px;
        }
      `}
    </style>
  </div>
);

export { BlogCard };
