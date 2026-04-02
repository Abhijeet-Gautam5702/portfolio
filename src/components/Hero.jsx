import React from 'react';
import data from '../data.json';

const Hero = () => {
  const { name, description } = data.profile;
  const firstName = name.split(' ')[0];
  const restOfName = name.slice(firstName.length);

  return (
    <div className="mt-4 space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        <span className="text-brand">{firstName.charAt(0)}</span>
        {firstName.slice(1)}
        {restOfName}
      </h1>
      <p className="text-muted text-lg max-w-2xl leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Hero;

