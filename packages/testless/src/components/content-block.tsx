import React from 'react';

import image1 from 'src/images/pexels-photo-3184287.jpeg';
import image2 from 'src/images/pexels-photo-3182812.jpeg';
import image3 from 'src/images/pexels-photo-3182739.jpeg';

const title = [
  `Bring your content together.`,
  `Gitlify`,
  `The only CMS that makes you feel like a Github power user.`,
];

const body = [
  `
  Gitlify makes it easy to bring all of your company’s web assets
  under one roof and manage them from a single location. Your entire
  team can work in the same space, collaboratively building products
  with low friction collaboration across teams.
  `,
  `
  Collaboration made easy.
  Gitlify provides a hassle-free way of interacting with Github for non-developers.
  We’ve adressed the core issue we encountered in our own client projects with Gitlify.
  Our experiences stem from thousands of hours working on apps, products, shops, and website.
  They range from startups to large multi billion cooperations.
  We want to make sure everybody can stay productive. Without stress.
  Even with lean resources and constantly changing, demanding requirements.
  `,
  `
  Collaboration made easy. The Github API is a powerful and robust
  resource, we just make it easier to use it for content creation.
  Gitlify provides a hassle-free way of using the Github API in your
  own CMS (or any other software). We’ve built the best features
  from our own experience working with static site generators like
  Jekyll and Hugo into Gitlify, making sure you can stay productive
  while staying lean on resources.
  `,
  `
  Gitlify enables frictionless collaboration between developers,
  designers and content creators. The CMS is build on top of the
  Github API to ensure full data integration with your existing
  tools and processes.
  `,
];

const ctaLabel = [
  `Sign up for free trial now!`,
  `Try Gitlify now or visit our demo page.`,
  `Learn more.`,
];

const ImageBlock = () => (
  <div className="flex items-center justify-center -mx-4 lg:pl-8">
    <div className="flex flex-col items-end px-3">
      <img
        src={image1}
        alt="Team talking through designs"
        className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
      />
      <img
        src={image2}
        alt="Team in front of the computer"
        className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
      />
    </div>
    <div className="px-3">
      <img
        src={image3}
        alt="Team in a meeting"
        className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
      />
    </div>
  </div>
);

export const ContentBlock: React.FC<{
  titleVariant: 0 | 1 | 2;
  bodyVariant: 0 | 1 | 2;
  ctaLabelVariant: 0 | 1 | 2;
  id?: string;
}> = ({ titleVariant, bodyVariant, ctaLabelVariant, id }) => (
  <div
    id={id}
    className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-white"
  >
    <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
      <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100">
          <svg viewBox="0 0 24 24" className="text-indigo-500 w-7 h-7">
            <polyline
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-miterlimit="10"
              points=" 8,5 8,1 16,1 16,5"
              stroke-linejoin="round"
            ></polyline>
            <polyline
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-miterlimit="10"
              points="9,15 1,15 1,5 23,5 23,15 15,15"
              stroke-linejoin="round"
            ></polyline>
            <polyline
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-miterlimit="10"
              points="22,18 22,23 2,23 2,18"
              stroke-linejoin="round"
            ></polyline>
            <rect
              x="9"
              y="13"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-miterlimit="10"
              width="6"
              height="4"
              stroke-linejoin="round"
            ></rect>
          </svg>
        </div>
        <div className="max-w-xl mb-6">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            {title[titleVariant]}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            {body[bodyVariant]}
          </p>
        </div>
        <div>
          <a
            href="file:///"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-500 hover:text-indigo-500"
          >
            {ctaLabel[ctaLabelVariant]}
            <svg
              fill="currentColor"
              viewBox="0 0 12 12"
              className="inline-block w-3 ml-2"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <ImageBlock />
    </div>
  </div>
);
