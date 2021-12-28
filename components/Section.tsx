import React from 'react';

const Section: React.FC = ({ children }) => {
  return (
    <section className="relative bg-white z-10 border rounded-lg px-5 py-10 space-y-6 flex flex-col place-content-center">
      {children}
    </section>
  );
};

export default Section;
