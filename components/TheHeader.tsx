/* eslint-disable @next/next/no-img-element */
import React from 'react';

const TheHeader = () => {
  return (
    <header className="relative">
      <figure>
        <img src="/image-hero-mobile.jpg" alt="Apple computer" />
      </figure>
      <div className="px-6 flex justify-between items-center absolute top-8 inset-x-0">
        <figure>
          <img src="/logo.svg" alt="Crowdfund logo" />
        </figure>
        <figure>
          <img src="/icon-hamburger.svg" alt="Hamburger menu icon" />
        </figure>
      </div>
    </header>
  );
};

export default TheHeader;
