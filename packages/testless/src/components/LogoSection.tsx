import React from 'react';


export const LogoSection: React.FC<{
  symbols: Array<{
    title: string;
    icon: React.ReactChild;
  }>;
  title: string;
}> = ({ title, symbols }) => (
  <React.Fragment>
    <h3 className="text-center mt-20">{title}</h3>
    <div className="mt-10 mr-20 ml-20 flex flex-row flex-wrap sm:mt-5  justify-around items-center">
      {symbols.map(({ title, icon }) => (
        <span
          className="mt-2 flex items-center text-xl text-white mr-3"
          title={title}
          aria-label={title}
        >
          {icon}
        </span>
      ))}
    </div>
  </React.Fragment>
);
