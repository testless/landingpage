import React from 'react';
import { ContentBlock } from 'src/components/content-block';
import { Footer } from 'src/components/footer';
import { Hero } from 'src/components/hero';
import { MainNavigation } from 'src/components/main-navigation';
import { SEO } from 'src/components/SEO';
import { SimpleHero } from 'src/components/simpleHero';
import { Steps } from 'src/components/steps';
import { Teaser } from 'src/components/teaser';
import { links } from 'src/links';

import image from 'src/images//pexels-photo-3182759.jpeg';

import image2 from 'src/images/pexels-photo-3228766.jpeg';
import { NorthStarIcon, SquirrelIcon } from '@primer/octicons-react';
import { TitleBlock } from 'src/components/TitleBlock';
import { LogoSection } from 'src/components/LogoSection';
import { trustSymbols } from 'src/data/trustSymbols';
import { HeroCopy } from 'src/components/HeroCopy';

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

const Index = () => (
  <React.Fragment>
    <SEO />
    <MainNavigation />
    <HeroCopy title="Need help with automating browser tests and quality?" ctaLabel="Let us talk"/>
    <LogoSection symbols={trustSymbols} title="Some of our clients:" />
    <Teaser
      id={links.features.id}
      titleVariant={1}
      claimVariant={0}
      boxVariants={[0, 1, 2, 3, 4, 5, 6, 7]}
    />
    <ContentBlock
      id={links.features.id}
      body="Hire a dedicated task force that excels at providing fast browser tests in a structured, clean way. We support your QA engineers - just temporary or long-term."
      title="Outsource browser testing"
      ctaLabel="Let's talk"
      Icon={NorthStarIcon}
    />
    <Steps
      image={image}
      id={links.how_we_work.id}
      steps={[
        {
          title: `Set up a call`,
          body: `We discuss the details of what scope of browser & QA automation you have in mind.`,
        },
        {
          title: `Low overhead`,
          body: `You communicate a set of user stories that you want to be tested regularly or give us a free hand.`,
        },
        {
          title: `We deliver the test`,
          body: `We provide a repo, write the tests, and integrate within your development flows.`,
        },
        {
          title: `We onboard your QA`,
          body: `We train your QA engineers to maintain and extend the tests. No coding skills are required.`,
        },
      ]}
    />

    <SimpleHero title="Sustainable testing strategy" ctaLabel="Let us walk you through." />
    <Steps
      image={image2}
      id={links.how_it_works.id}
      steps={[
        {
          title: `You define the scope`,
          body: `We talk to your technical and product teams. We discuss what is possible, desired and give some recommendations.`,
        },
        {
          title: `We set up a repo`,
          body: `We set up a clean repo with the desired BDD tests, based on your user stories, your environments & browsers.`,
        },
        {
          title: `CICD integration and alerting`,
          body: `We integrate with your CICD pipelines. We initialize systems that monitor your environments constantly.`,
        },
        {
          title: `Maintain or onboard?`,
          body: `Depending on your preferences, we onboard your teams to use our framework or maintain it for you.`,
        },
      ]}
    />
    <SimpleHero title="Quality matters. Act now!" ctaLabel="Let us talk now." />
    <Footer claim="Quality creates trust."/>
  </React.Fragment>
);

export default Index;
