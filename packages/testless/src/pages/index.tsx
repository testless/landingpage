import React from 'react';
import { ContentBlock } from 'src/components/content-block';
import { Footer } from 'src/components/footer';
import { Hero } from 'src/components/hero';
import { MainNavigation } from 'src/components/main-navigation';
import { Pricing } from 'src/components/pricing';
import { Steps } from 'src/components/steps';
import { Teaser } from 'src/components/teaser';
import { links } from 'src/links';

const Index = () => (
  <React.Fragment>
    <MainNavigation  />
    <Hero variant="1" titleVariant={2} />
    <Teaser
      id={links.features.id}
      titleVariant={1}
      claimVariant={0}
      boxVariants={[0, 1, 2, 3, 4, 5, 6, 7]}
    />
    <ContentBlock
      id={links.how_it_works.id}
      bodyVariant={1}
      titleVariant={0}
      ctaLabelVariant={0}
    />
    <Steps />
    <Pricing id={links.pricing.id} claimVariant={0} bodyVariant={0} />
    <Footer  />
  </React.Fragment>
);

export default Index;
