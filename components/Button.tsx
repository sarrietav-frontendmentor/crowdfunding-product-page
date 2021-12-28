import React from 'react';

const Button: React.FC = ({ children }) => {
  return (
    <button className="bg-teal-500 text-white font-bold px-10 rounded-full">
      {children}
    </button>
  );
};

export default Button;
