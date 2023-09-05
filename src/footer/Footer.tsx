import React, { ReactNode } from 'react';

import { Config } from '../utils/Config';

type IFooterProps = {
  children: ReactNode;
};

const Footer = (props: IFooterProps) => (
  // como coloco essa img no background do foter? /assets/images/footer.gif

  <div>
    <div className="bg-white footer-background">
      <footer className="max-w-screen-xl py-12 mx-auto text-black">
        {props.children}
        {/* <img src="/assets/images/footer.gif" alt="oi" className="w-32 mx-auto" /> */}
      </footer>

    </div>
    <div className="text-center text-gray-500 text-sm mt-12 px-5 copyright">
      {`© Copyright ${new Date().getFullYear()} ${
        Config.site_name
      }. Todos os direitos reservados.`}
    </div>
    <style jsx>
      {`
        .footer-background {
          background-image: url('/assets/images/footer2.gif');

          background-size: cover; /* Para cobrir todo o espaço do footer */
          background-repeat: no-repeat; /* Evita a repetição da imagem */
        }
        .copyright{
          margin-bottom: 20px;
          margin-top: 20px;
        }
        `}
    </style>
  </div>
);

export { Footer };
