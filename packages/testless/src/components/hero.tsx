import React from 'react';

import BgImage from 'src/images/pexels-photo-3228766.jpeg';
import { CustomLink } from 'src/links';
import { Logo } from './logo';

import Google from 'src/images/google.svg';
import { LogoGithubIcon } from '@primer/octicons-react';
import Git from 'src/images/git.svg';
import JSONSchema from 'src/images/json.svg';
import Cloudflare from 'src/images/cloudflare.svg';

const title = [
  `Content, translation and data collaboration in one click.`,
  `Collaborate on your content with ease.`,
  `Collaborate with your dev team like never before.`,
  `Collaborate like never before.`,
  `A CMS build on top of the Github API.`,
  `The missing link between Github and your website.`,
  `Collaborate with Github.`,
];

const claim = (
  <p>
    Gitlify is a CMS build <b className="underline">on top</b> of Github.
    <br />
    <b className="underline">Frictionless</b> collaboration across teams.
    <br />
    Translations, content, data - <b className="underline">always in sync</b>.
    <br />
    Delivered <b className="underline">instantly</b> via pull requests.
  </p>
);

const trustSymbols = [
  {
    title: `Github API`,
    icon: <LogoGithubIcon size={17} />,
  },
  {
    title: `Cloudflare CDN`,
    icon: <Cloudflare height={30} className="mb-1" />,
  },
  {
    title: `JSON Schema`,
    icon: <JSONSchema height={17} />,
  },
  {
    title: `Google cloud infrastructure`,
    icon: <Google height={15} className="mt-1" />,
  },
  {
    title: `Git versioning`,
    icon: <Git height={20} />,
  },
];

export const Hero: React.FC<{
  variant: '1' | '2';
  titleVariant: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}> = ({ variant, titleVariant }) =>
  variant === '1' ? (
    <div className="relative w-full">
      <img
        src={BgImage}
        alt=""
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative bg-opacity-80 bg-indigo-700">
        <svg
          viewBox="0 0 1160 163"
          className="absolute inset-x-0 bottom-0 text-white"
          style={{ bottom: '-1px' }}
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          ></path>
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                {title[titleVariant]}
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                {claim}
              </p>
              <CustomLink name="signup" aria-label="" className=" text-white">
                Try it out now
                <svg
                  fill="currentColor"
                  viewBox="0 0 12 12"
                  className="inline-block w-3 ml-2"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </CustomLink>
              <div className="mt-10 flex flex-row flex-wrap sm:mt-5  justify-between items-center">
                <div className="mt-2 flex items-center text-sm text-white h-10">
                  Build on top of:
                </div>
                <div className="flex flex-row flex-wrap justify-around items-center  h-10">
                  {trustSymbols.map(({ title, icon }) => (
                    <span
                      className="mt-2 flex items-center text-xl text-white mr-3"
                      title={title}
                      aria-label={title}
                    >
                      {icon}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  <Logo />
                </h3>
                <form>
                  {/* <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      placeholder="John"
                      required
                      type="text"
                      name="firstName"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:bg-indigo-500 focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      placeholder="Doe"
                      required
                      type="text"
                      name="lastName"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:bg-indigo-500 focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      name="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:bg-indigo-500 focus:outline-none focus:shadow-outline"
                    />
                  </div> */}
                  <div className="mt-4 mb-2 sm:mb-4">
                    <CustomLink
                      name="signup"
                      btnColor="primary"
                      className="w-full"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <CustomLink
                      name="login"
                      btnColor="primaryOutlined"
                      className="w-full"
                    />
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm text-center">
                    By continuing, you are indicating that you accept our{' '}
                    <CustomLink name="terms">terms</CustomLink> and{' '}
                    <CustomLink name="privacy">privacy policy</CustomLink>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-16 bg-gray-200">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>
              </span>
              {title[titleVariant]}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">{claim}</p>
          </div>
          <div>
            <a
              href="file:///"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none"
            >
              Try Gitlify for free now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
