import React from 'react';
import data from '../data.json';

const Hero = () => {
  const { name, designation, description } = data.profile;
  const firstName = name.split(' ')[0];
  const restOfName = name.slice(firstName.length);

  const renderDescription = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={index} className="font-medium text-brand">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="mt-4 space-y-4">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          <span className="text-brand">{firstName.charAt(0)}</span>
          {firstName.slice(1)}
          {restOfName}
        </h1>
        <p className="text-xl font-semibold mt-1 text-foreground">
          {designation}
        </p>
      </div>
      <p className="text-muted text-lg max-w-2xl leading-relaxed">
        {renderDescription(description)}
      </p>
    </div>
  );
};

export default Hero;
