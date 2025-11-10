import React from 'react';

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children }) => {
  return <div className="smooth-scroll">{children}</div>;
};

export default React.memo(SmoothScrollWrapper);
