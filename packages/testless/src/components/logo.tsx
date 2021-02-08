import React from 'react';
import LogoSVG from 'src/images/logo.svg';
import { Link } from 'gatsby';

import './logo.css';
import clsx from 'clsx';

const Name: React.FC<{ className?: string }> = ({ className }) => (
  <Link className={clsx('gf__logo__bn gf__logo__bn--header', className)} to="/">
    testless
  </Link>
);

export const Logo: React.FC<{ hideOnXS?: boolean }> = ({ hideOnXS }) => (
  <div className="gf__logo inline-flex items-center lg:mx-auto">
    <Link to="/">
      <LogoSVG />
    </Link>
    <Name />
  </div>
);
