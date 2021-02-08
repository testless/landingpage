import React from 'react';

import { Footer } from 'src/components/footer';
import { MainNavigation } from 'src/components/main-navigation';

const NotFoundPage = () => (
  <React.Fragment>
    <MainNavigation />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Footer />
  </React.Fragment>
);

export default NotFoundPage;
