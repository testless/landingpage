import React from 'react';
import { CustomLink } from 'src/links';
import { Logo } from './logo';

const MenuSVG = () => (
  <svg viewBox="0 0 24 24" className="w-5 text-gray-600">
    <path
      fill="currentColor"
      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
    ></path>
    <path
      fill="currentColor"
      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
    ></path>
    <path
      fill="currentColor"
      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
    ></path>
  </svg>
);

export const MainNavigation: React.FC<{ variant?: '1' | '2' | '3' }> = ({
  variant = '2',
}) => (
  <div className="px-4 py-5 mx-auto w-full md:px-24 lg:px-8 bg-gray-200">
    <div className="relative flex grid items-center max-w-6xl grid-cols-2 mx-auto lg:grid-cols-3">
      <ul className="flex items-center hidden space-x-8 lg:flex">
        <li>
          <CustomLink name="how_it_works" />
        </li>
        <li>
          <CustomLink name="pricing" />
        </li>
        <li>
          <CustomLink name="features" />
        </li>
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
