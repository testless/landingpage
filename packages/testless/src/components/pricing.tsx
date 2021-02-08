import React from 'react';
import { CustomLink } from 'src/links';

const claim = [
  `Instant support.`,
  `Your Github Repository as a CMS`,
  `Get your content and source code in sync with Gitlify.`,
];

const body = [
  `
  Outsource full projects or hire us on a hourly basis
  `,
  `
    We can offer either a full project or an on-demand service to suit your needs. Simply let us know how we can help and our team will be in touch soon.
  `,
  `
  Gitlify enables you to get all of your organization&#39s content,
  translations and data from all departments into one repository.
  `,
];

export const Pricing: React.FC<{
  claimVariant: 0 | 1 | 2;
  bodyVariant: 0 | 1 | 2;
  id?: string;
}> = ({ claimVariant, bodyVariant, id }) => (
  <div
    id={id}
    className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 w-full bg-white"
  >
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-indigo-500">
          Our Pricing
        </p>
      </div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        {claim[claimVariant]}
      </h2>
      <p className="text-base text-gray-700 md:text-lg">{body[bodyVariant]}</p>
    </div>
    <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
      <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
        <div className="text-center">
          <div className="text-lg font-semibold">Free</div>
          <div className="flex items-center justify-center mt-2">
            <div className="mr-1 text-5xl font-bold">0 €</div>
          </div>
          <div className="mt-2 space-y-3">
            <div className="text-gray-700">30 min call</div>
            <div className="text-gray-700">Free estimate</div>
            <div className="text-gray-700">Budget &amp; time</div>
          </div>
        </div>
        <div>
          <CustomLink
            name="signup"
            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          >
            Set up call
          </CustomLink>
          <p className="max-w-xs mt-6 text-xs text-gray-700 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            We are exited to hear what you want to build.
          </p>
        </div>
      </div>
      <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
        <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-indigo-500">
            Fastest option
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold">Instant &amp; audacious</div>
          <div className="flex items-center justify-center mt-2">
            <div className="mr-1 text-5xl font-bold">200 €</div>
            <div className="text-gray-700">/ hour</div>
          </div>
          <div className="mt-2 space-y-3">
            <div className="text-gray-700">Senior consultant</div>
            <div className="text-gray-700">Immediate start</div>
            <div className="text-gray-700">Quickly onboarded</div>
          </div>
        </div>
        <div>
        <CustomLink
            name="signup"
            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-500 hover:bg-indigo-500 focus:shadow-outline focus:outline-none"
          >
            Hire now
          </CustomLink>
          <p className="max-w-xs mt-6 text-xs text-gray-700 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            Receive a EU-VAT invoice &amp; sign the paperwork. We precharge.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
        <div className="text-center">
          <div className="text-lg font-semibold">Entreprise</div>
          <div className="flex items-center justify-center mt-2">
            <div className="mr-1 text-5xl font-bold">150 €</div>
            <div className="text-gray-700">/ hour</div>
          </div>
          <div className="mt-2 space-y-3">
            <div className="text-gray-700">200+ hours?</div>
            <div className="text-gray-700">Full service?</div>
            <div className="text-gray-700">Outsourcing?</div>
          </div>
        </div>
        <div>
          <CustomLink
            name="signup"
            className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
          >
            Book a call
          </CustomLink>
          <p className="max-w-xs mt-6 text-xs text-gray-700 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
            If you have a large project, let's jump on a call.
          </p>
        </div>
      </div>
    </div>
  </div>
);
