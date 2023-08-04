import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="content">
    {props.children}

    <style jsx>
      {`
        .content {
          @apply tracking-normal leading-5 lg:leading-5 xl:leading-6 text-black text-base lg:text-lg xl:text-xl;
        }

        .content :global(a) {
          @apply text-black no-underline;
        }

        .content :global(a:hover) {
          @apply border-b-2 border-blue-600;
        }

        .content :global(p) {
          @apply my-8;
        }

        .content :global(h1) {
          @apply text-5xl font-bold mt-12 mb-5 leading-10;
        }

        .content :global(h2) {
          @apply text-4xl font-bold mt-10 mb-5;
        }

        .content :global(h3) {
          @apply text-3xl font-bold mt-10 mb-5;
        }

        .content :global(h4) {
          @apply text-2xl font-bold mt-10 mb-5;
        }

        .content :global(h5) {
          @apply text-xl font-bold mt-10 mb-5;
        }

        .content :global(h6) {
          @apply text-lg font-bold mt-10 mb-5;
        }

        .content :global(ul),
        .content :global(ol),
        .content :global(p) {
          @apply overflow-visible;
        }

        .content :global(> div > ul),
        .content :global(> div > ol) {
          @apply my-6;
        }

        .content :global(ul),
        .content :global(ol) {
          @apply pl-8;
        }

        .content :global(ul) {
          @apply list-outside list-disc;
        }

        .content :global(ol) {
          @apply list-outside list-decimal;
        }

        .content :global(blockquote p) {
          @apply pl-4 py-2 border-l-4 border-blue-600 bg-gray-700;
        }

        .content :global(img) {
          @apply rounded-md;
        }

        .content :global(pre[class*='language-']) {
          @apply my-8;
        }

        .content :global(hr) {
          @apply my-8;
        }

        .content :global(table) {
          @apply whitespace-nowrap my-8 border-collapse block overflow-auto;
        }

        .content :global(th),
        .content :global(td) {
          @apply border px-8 py-4;
        }

        .content :global(th) {
          @apply bg-gray-200;
        }

        .content :global(th:not([align])) {
          @apply text-left;
        }
      `}
    </style>
  </div>
);

export { Content };
