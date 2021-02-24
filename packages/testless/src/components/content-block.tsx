import React from 'react';

import image1 from 'src/images/pexels-photo-3184287.jpeg';
import image2 from 'src/images/pexels-photo-3182812.jpeg';
import image3 from 'src/images/pexels-photo-3182739.jpeg';
import { CustomLink } from 'src/links';
import { IconProps, NorthStarIcon } from '@primer/octicons-react';
import { TitleBlock } from './TitleBlock';

const title = [];

const body = [
  `
  Cloud-native software engineering within modern microservice architectures - either based on serverless, Docker, or Kubernetes.
  With a strong bias towards simple, low overhead, sustainable and scalable IT solutions.
  In time and in budget. Prioritized according to Pareto. Consulting where necessary.
  You win, we win.
  `,
];

const ctaLabel = [`Contact us now`, `Hire us now`, `Let's talk`];

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
  title: string;
  body: string;
  ctaLabel: string;
  Icon: React.FC<IconProps>;
  id?: string;
}> = ({ title, body, ctaLabel, Icon, id }) => (
  <div
    id={id}
    className="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-white "
  >
    <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
      <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        <TitleBlock title={title} Icon={Icon}>
          <p className="text-base text-gray-700 md:text-lg">{body}</p>
        </TitleBlock>
        <div>
          <CustomLink
            name="signup"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-500 hover:text-indigo-500"
          >
            {ctaLabel}
            <svg
              fill="currentColor"
              viewBox="0 0 12 12"
              className="inline-block w-3 ml-2"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </CustomLink>
        </div>
      </div>
      <ImageBlock />
    </div>
  </div>
);
