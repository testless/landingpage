import React from 'react';
import { IconProps } from '@primer/octicons-react';

export const TitleBlock: React.FC<{
  title: string;
  Icon: React.FC<IconProps>;
  id?: string;
}> = ({ title, Icon, children }) => (
  <React.Fragment>
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-100">
      <Icon className="text-indigo-500 w-7 h-7" />
    </div>
    <div className="max-w-xl mb-6">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        {title}
      </h2>
      {children}
    </div>
  </React.Fragment>
);
