import {
  FlameIcon,
  GitPullRequestIcon,
  HistoryIcon,
  LawIcon,
  OrganizationIcon,
  RocketIcon,
  SyncIcon,
  VersionsIcon,
} from '@primer/octicons-react';
import React from 'react';
import { CustomLink } from 'src/links';

const title = [
  `Build a modern website with no coding required.`,
  `Software engineering as a service.`,
  `The most powerful CMS for your Github projects.`,
  `Build, host and collaborate on websites.`,
];

const claim = [
  `Simplicty is the ultimate sophistication. The simplest solution is often the most sophisticated one.`,
  `Get everything you need to build a website without any technical knowledge.`,
  `A full-featured, lightweight and extensible content management system built on top of the Github API.`,
];

const boxes = [
  {
    icon: OrganizationIcon,
    title: `Rely on us`,
    body: `
    We only support projects where we can truly build value and commit long term.
  `,
  },
  {
    icon: HistoryIcon,
    title: `Save time`,
    body: `
      Don't search for hours when you need an engineer for two weeks or a smaller subproject.
    `,
  },
  {
    icon: FlameIcon,
    title: `Battle tested engineers`,
    body: `
    Our engineers have worked in highly regulated industries and fast scaling startups.
  `,
  },
  {
    icon: SyncIcon,
    title: `Iterate and scale`,
    body: `
      Scaling teams up and down with easy to onboard engineers makes you invincible.
    `
  },
  {
    icon: RocketIcon,
    title: `Ship in time`,
    body: `Before not delivering on a deadline, staff up your teams instantly.`,
  },
  {
    icon: VersionsIcon,
    title: `Less paperwork`,
    body: `
      We have easy to understand contracts or sign yours. You simply order man power and keep the code & IP.
      `,
  },
  {
    icon: LawIcon,
    title: `Low overhead`,
    body: `
      Don't manage staff, but scale it up and down - like additional software and infrastructure.
      `,
  },
  {
    title: `Instant support`,
    body: `We usually can present you an offer within one day for up to 3 engineers ready to start asap.`,
    additionalInfo: null,
    link: null
  },
];

export const Teaser: React.FC<{
  titleVariant: 0 | 1 | 2;
  claimVariant: 0 | 1 | 2;
  boxVariants: Array<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  id?: string;
}> = ({ titleVariant, claimVariant, boxVariants, id }) => (
  <div
    id={id}
    className="px-4 py-16 mx-auto bg-white w-full md:px-24 lg:px-8 lg:py-20"
  >
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        {title[titleVariant]}
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
        {claim[claimVariant]}
      </p>
    </div>
    <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
      {boxVariants
        .map((x) => boxes[x])
        .filter(Boolean)
        .map(({ title, body, icon: Icon, additionalInfo, link }) => (
          <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div className="mr-4">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-100">
                {Icon ? (
                  <Icon size={10} className="w-7 h-7 text-indigo-500" />
                ) : (
                  <svg
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                    className="w-10 h-10 text-indigo-500"
                  >
                    <polygon
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    ></polygon>
                  </svg>
                )}
              </div>
            </div>
            <div>
              <h6 className="mb-3 text-xl font-bold leading-5 text-gray-900">
                {title}
              </h6>
              <p className="mb-2 text-sm text-gray-700">{body}</p>
              {additionalInfo && (
                <p className="mb-2 text-sm text-gray-500">{additionalInfo}</p>
              )}
              {link && (
                <CustomLink
                  name={link}
                  className="mt-1 inline-flex items-center font-semibold text-indigo-500 transition-colors duration-200 hover:text-indigo-500"
                >
                  Learn more
                </CustomLink>
              )}
            </div>
          </div>
        ))}
    </div>
  </div>
);
