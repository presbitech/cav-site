import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';

export type IPaginationProps = {
  previous?: string;
  next?: string;
};

const Pagination = (props: IPaginationProps) => (
  <div className="pt-8 flex justify-center">
    {props.previous && (
      <div className="mx-3 bg-white rounded-full p-2">
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          ← Mais novos
        </Link>
      </div>
    )}

    {props.next && (
      <div className="mx-3 bg-white rounded-full p-2">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          Mais antigos →
        </Link>
      </div>
    )}

    <style jsx>
      {`
        a {
          @apply text-gray-600;
        }

        a:hover {
          @apply border-b-2 border-blue-600;
        }
      `}
    </style>
  </div>
);

export { Pagination };
