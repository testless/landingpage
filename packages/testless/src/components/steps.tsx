import { SquirrelIcon } from '@primer/octicons-react';
import React from 'react';
import { TitleBlock } from './TitleBlock';



export const Steps: React.FC<{
  steps: Array<{
    title: string;
    body: string;
  }>;
  id?: string;
  image: string;
}> = ({
  steps,
  image,
  id
}) => (
  <div id={id} className="px-4 py-16 mx-auto w-full bg-white md:px-24 lg:px-8 lg:py-20">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5  max-w-6xl mx-auto">
      <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
        {steps.map(({ title, body }, index) => (
          <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:gray-200">
            <div className="flex items-center mb-1">
              <span className="flex items-center min-w-4 justify-center w-4 h-4 mr-2 text-xs font-medium text-indigo-500 rounded bg-indigo-100">
                {index + 1}
              </span>
              <h4 className="text-gray-900 text-lg font-semibold sm:text-base">
                {title}
              </h4>
            </div>
            <p className="text-sm text-gray-700">{body}</p>
          </div>
        ))}
      </div>
      <div className="relative md:col-span-2 lg:col-span-2">
        <img
          src={image}
          alt=""
          className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
        />
      </div>
    </div>
  </div>
);
