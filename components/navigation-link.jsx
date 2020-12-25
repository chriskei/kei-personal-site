import React from 'react';

const NavigationLink = (props) => {
  const { changeSection, isCurrentSection, className, children } = props;

  return (
    <a
      onClick={() => changeSection()}
      style={{ color: isCurrentSection ? 'orange' : 'white' }}
      className={className && className}
    >
      {children}
    </a>
  );
};

export { NavigationLink };
