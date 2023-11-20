import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/semantic-props';
import { cn } from '../../lib/utils';

function Header({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof motion.header extends React.FC<infer P> ? P : never;
  return (
    <>
        <header {...attributes} className={cn('', className)} style={style}>
          {children}
        </header>
    </>
  );
}
export default memo(Header);
