import React, { PropsWithChildren } from 'react';
import Image from 'next/image';

const LazyImageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const cloneChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Image) {
      return React.cloneElement(child, { loading: 'lazy' }! as any);
    }
    return child;
  });
  return <>{cloneChildren}</>;
};
export default LazyImageWrapper;
