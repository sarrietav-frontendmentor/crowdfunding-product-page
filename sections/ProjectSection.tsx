/* eslint-disable @next/next/no-img-element */
import Button from '@/components/Button';
import Section from '@/components/Section';
import React from 'react';

const ProjectSection = () => {
  return (
    <Section>
      <figure className="flex place-content-center absolute -top-7 inset-x-0">
        <img src="/logo-mastercraft.svg" alt="Bookmark icon" />
      </figure>
      <h1 className="font-bold text-2xl text-center">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-gray-500 text-center leading-relaxed">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex place-content-center space-x-3">
        <Button>Back this project</Button>
        <button>
          <figure>
            <img src="/icon-bookmark.svg" alt="Bookmark icon" />
          </figure>
        </button>
      </div>
    </Section>
  );
};

export default ProjectSection;
