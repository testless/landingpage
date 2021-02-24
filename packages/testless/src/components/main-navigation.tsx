import React from 'react';
import { CustomLink, links } from 'src/links';
import { Logo } from './logo';
import { SEO } from './SEO';


export const MainNavigation: React.FC<{ navs?: Array<keyof typeof links> }> = ({
  navs = ['features', 'how_we_work', 'how_it_works'],
}) => (
  <div className="px-4 py-5 mx-auto w-full md:px-24 lg:px-8 bg-gray-200">
    <div className="relative flex grid items-center max-w-6xl grid-cols-2 mx-auto lg:grid-cols-3">
      <ul className="flex items-center hidden space-x-8 lg:flex">
        {navs.map(nav => (<li key={nav}>
          <CustomLink name={nav} />
        </li>))}
      </ul>
      <Logo />
      <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
        <li>
          <CustomLink name="signup" btnColor="primary" />
        </li>
      </ul>
      <div className="ml-auto lg:hidden">
        {/* <button
          aria-label="Open Menu"
          title="Open Menu"
          className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
        >
          <MenuSVG />
        </button> */}
      </div>
    </div>
  </div>
);
