import React from 'react';

import image from 'src/images//pexels-photo-3182759.jpeg';

/*
A CMS build on top of the Github API. Enabling frictionless
                collaboration. Receive translation, content and data from all
                departments via pull requests.


                Every time you push new code or make changes to existing files,
                it creates a commit that is stored in your repository&#39s
                history. This means you can track every change made to any file
                over time - including images, HTML and CSS stylesheets for
                website pages, blog posts or product descriptions for e-commerce
                stores etc.. All this information is available in JSON format
                through the GitHub API which we have used to create our platform
                so that we are able to translate your entire site into any
                language at any time without having access to your source code
                or database."
*/

const steps = [
  {
    title: `Prepare repository`,
    body: `Developers add the folder ".gitlify". They define the data structure they need with JSON format. The Giltlify Wizard helps them here.`,
  },
  {
    title: `Invite collaborators`,
    body: `Developers add collaborators to their repo with write rights. Currently Gitlify requires a Github login, but not necessary a paid one within you org.`,
  },
  {
    title: `Create and edit data`,
    body: `Collaborators signin with Github and can start creating, copying and editing. Every editor has its own session, so nobody overwrites content.`,
  },
  {
    title: `Publish their changes`,
    body: `When starting editing, we create a branch in the background. Once the editor hits publish, a PR with all his changes is opened.`,
  },
];

export const Steps = () => (
  <div className="px-4 py-16 mx-auto w-full bg-white md:px-24 lg:px-8 lg:py-20">
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
