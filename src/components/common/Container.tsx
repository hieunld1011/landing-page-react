import React from 'react';

interface ContainerProps {
  containerClass?: string;
  padding?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ containerClass, padding, ariaLabel, children }) => {
  return (
    <div className={`container ${containerClass} ${padding}`} aria-label={ariaLabel}>
      {children}
    </div>
  );
};

export default Container;
