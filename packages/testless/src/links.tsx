import { MarkGithubIcon } from '@primer/octicons-react';
import clsx from 'clsx';
import React from 'react';

type LinkType = {
  name: string;
  href: string;
  id?: string;
  icon?: React.FC<React.SVGAttributes<SVGElement>>;
};

export const links = {
  imprint: {
    name: `Imprint`,
    href: `https://testless.com/imprint/`,
  },
  terms: {
    name: `Terms of service`,
    href: `/legal/terms/`,
  },
  privacy: {
    name: `Privacy policy`,
    href: `/legal/privacy/`,
  },
  cookie: {
    name: `Cookie policy`,
    href: `/legal/cookie-policy/`,
  },
  signup: {
    name: `Try for free`,
    href: `https://wizard.gitlify.com/cms/`,
    icon: MarkGithubIcon,
  },
  login: {
    name: `Login`,
    href: `https://cms.gitlify.com/`,
    icon: MarkGithubIcon,
  },
  pricing: {
    name: `Pricing`,
    href: '/',
    id: `pricing`,
  },
  how_it_works: {
    name: `How it works`,
    href: '/',
    id: `how_it_works`,
  },
  features: {
    name: `Features`,
    href: '/',
    id: `features`,
  },
};

const linkClassNames = `font-medium tracking-wide  transition-colors duration-200`;
const buttonClassNames = `inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md  focus:shadow-outline focus:outline-none`;
const color = {
  primary: `bg-indigo-500 hover:bg-indigo-500 text-white`,
  primaryOutlined: `border-indigo-900 hover:bg-indigo-500 hover:text-white`,
};

export const CustomLink: React.FC<{
  name: keyof typeof links;
  className?: string;
  btnColor?: keyof typeof color;
}> = ({ name, className, btnColor, children }) => {
  const el = links[name] as LinkType;

  const href = el.href + (el.id ? `#${el.id}` : ``);
  const label = el.name;
  const Icon = el.icon;

  const finalClassName = clsx(
    className,
    btnColor ? color[btnColor] : undefined,
    btnColor ? buttonClassNames : linkClassNames
  );

  const linkProps = {
    href: href,
    'aria-label': label,
    title: label,
    className: finalClassName,
  };

  return (
    <a {...linkProps}>
      {Icon ? <Icon className="-ml-1 mr-2 h-5 w-5" /> : null}
      {children || label}
    </a>
  );
};
