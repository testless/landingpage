import React from 'react';
import ERGO from 'src/images/clients/ergo.svg';
import Douglas from 'src/images/clients/douglas.svg';
import UKE from 'src/images/clients/uke.svg';
import JIMDO from 'src/images/clients/jimdo.svg';
import Freenet from 'src/images/clients/freenet.svg';

export const trustSymbols = [
  {
    title: `Jimdo`,
    icon: <JIMDO height={30} />,
  },
  {
    title: `Universitätsklinikum Eppendorf`,
    icon: <UKE height={45} />,
  },
  {
    title: `ERGO AG`,
    icon: <ERGO height={25} />,
  },
  {
    title: `Douglas`,
    icon: <Douglas height={20} />,
  },
  {
    title: `Freenet`,
    icon: <Freenet height={40} />,
  },
];
