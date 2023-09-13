import React, { ReactNode } from 'react';

import { Base } from './Base';

type IMainProps = {
  meta: ReactNode;
  // hero: ReactNode;
  children: ReactNode;
};

const NoSidebar = (props: IMainProps) => (
  <Base meta={props.meta}>
    <div className="w-full bg-white text-black">
      <div className="max-w-screen-xl mx-auto flex flex-wrap">
        <div className="w-full md:w-3/3 md:px-3">{props.children}</div>
      </div>
    </div>
  </Base>
);

export { NoSidebar };
