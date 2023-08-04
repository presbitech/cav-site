import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Config } from '../utils/Config';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="w-full bg-white">
    <div className="navbar max-w-screen-xl flex flex-wrap justify-between items-center py-4 px-3 mx-auto">
      <div className="font-extrabold text-3xl">
        <Link href="/">
          <a>{Config.site_name}</a>
        </Link>
      </div>

      <nav>
        <ul className="flex flex-wrap items-center font-extrabold">{props.children}</ul>
      </nav>
    </div>

    <style jsx>
      {`
        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }
        .navbar :global(a:hover) {
          @apply text-blue-600;
        }
      `}
    </style>
  </div>
);

export { Navbar };
