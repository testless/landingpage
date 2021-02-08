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

const title = [
  `Build a modern website with no coding required.`,
  `Easy, simple, powerful - a CMS build for Git.`,
  `The most powerful CMS for your Github projects.`,
  `Build, host and collaborate on websites.`,
];

const claim = [
  `Gitlify is the easiest way to create and manage your content across teams in one place.`,
  `Get everything you need to build a website without any technical knowledge.`,
  `A full-featured, lightweight and extensible content management system built on top of the Github API.`,
];

const boxes = [
  {
    icon: OrganizationIcon,
    title: `Collaborate seamlessly across team.`,
    body: `
    Create, translate and update content via intuitive forms & lists. Everything is submitted as a PR. No communication overhead.
  `,
    additionalInfo: `
    Also developers can edit data with their editors directly. They don't have to learn another tool and switch context.
    `,
  },
  {
    icon: HistoryIcon,
    title: `Preserve reliably your history`,
    body: `
      Never loose content again. Go back to old versions. See how your content has changed over the process.
    `,
    additionalInfo: `
      It comes handy if you want to revert. Maybe previous content was converting better, a feature had bugs, etc.
    `,
  },
  {
    icon: FlameIcon,
    title: `Save rollback  in emergencies`,
    body: `
    Relying on stored data in indepedent 3rd party systems makes build not reproducible.
    Rollbacks might fail, builds might break.
  `,
    additionalInfo: `
    All data is stored in your repository. No dependency from Gitlify. More reliable, safe, and transparent.
  `,
  },
  {
    icon: SyncIcon,
    title: `Be always in sync with source code`,
    body: `
      Code and content are in one place. Developers do not need to change tools. No cost of context switching.
    `,
    additionalInfo: `
      All data is committed. Type safe. More fous, more features. More productivity, faster growth.
    `,
  },
  {
    icon: RocketIcon,
    title: `Ship instanly upon changes`,
    body: `
      Your dev team can react flexible on your changes - update pages, translation packages, legal pages.
      `,
    additionalInfo: `
      Modern CICD pipeline can do almost everything. Ship continuously and amaze your customers.
      `,
  },
  {
    icon: VersionsIcon,
    title: `Resolve conflicts selectively`,
    body: `
      In the rare case, that several colleagues have worked on the same data, you can always cherry pick what you like best.
      `,
    additionalInfo: `Happens very rarely, but can not be avoided in growing organizations. Then it is nice to have a tool.`,
  },
  {
    icon: LawIcon,
    title: `Less overhead, more compliance`,
    body: `
      Every third party persisting data creates an overhead and a weak link - reliability, security, compliance issues arise.
      `,
    additionalInfo: `Giltify persist data in your repo, not in its own backends. This makes it very easy.`,
  },
  {
    title: `Automate any workflow`,
    body: `
      Gitlify CMS allows any kind of data to be received: bug tickets, todo list, features, documentation. Rigid but flexible datatypes.
      `,
    additionalInfo: `With the rise of more powerful CICD, your creativity and flexibility - the sky is the limit. We are exicted to see what your engineers dream up.`,
  },

  {
    title: `Content marketing made easy.`,
    body: `
    Have an entire team
    participate in creating content for you blog through Github PRs! You
    can also have multiple contributors per article, where each
    contributor only needs write access to their own PR-branch.
  `,
  },
  {
    title: `CMS for everyone.`,
    body: `
  Gitlify is the first web content management
  system that runs completely in your git repository,
  so anyone can contribute content directly via pull requests.
  `,
  },
  {
    title: `Web development simplified.`,
    body: `
    Designers and non-technical users can work together with
    developers to create great looking websites with ease using
    our intuitive UI powered by ReactJS + Redux
    framework & Material design components
  `,
  },
  {
    title: `The best way to collaborate with others online.`,
    body: `
    Gitlify is a great way to enable collaboration between departments like marketing,
    sales and product development.
    Receive translations, data or content from other teams via pull requests.
    It&#39s easy to use too! Head over to gitlify.com/demo/... for a demo.
  `,
  },
  {
    title: `Create beautiful websites without writing code.`,
    body: `
  In just minutes you can have a fully functional website
  that looks amazing using Gitlify and flexible templating engine.
  You don't need any coding skills either! Simply pick one of our 30+ themes
  in our template gallery or start creating your own theme by combining
  elements from different templates.
  `,
    link: ``,
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
                <a
                  href={link}
                  aria-label=""
                  className="mt-1 inline-flex items-center font-semibold text-indigo-500 transition-colors duration-200 hover:text-indigo-500"
                >
                  Learn more
                </a>
              )}
            </div>
          </div>
        ))}
    </div>
  </div>
);
