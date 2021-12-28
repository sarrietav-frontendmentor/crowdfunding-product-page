import Section from '@/components/Section';
import React from 'react';

const DataSection = () => {
  return (
    <Section>
      <DataContainer>
        <DataValue>$89,914</DataValue>
        <DataDescription>of $100,000 backed</DataDescription>
      </DataContainer>
      <hr className="w-1/3 mx-auto bg-neutral-300" />
      <DataContainer>
        <DataValue>5,007</DataValue>
        <DataDescription>total backers</DataDescription>
      </DataContainer>
      <hr className="w-1/3 mx-auto bg-neutral-300" />
      <DataContainer>
        <DataValue>56</DataValue>
        <DataDescription>days left</DataDescription>
      </DataContainer>
      {/* // TODO: Make progress bar */}
    </Section>
  );
};

export default DataSection;

export const DataContainer: React.FC = ({ children }) => {
  return <div className="text-center space-y-3">{children} </div>;
};

export const DataValue: React.FC = ({ children }) => {
  return <p className="font-bold text-4xl">{children} </p>;
};

export const DataDescription: React.FC = ({ children }) => {
  return <p className="text-neutral-500">{children} </p>;
};
