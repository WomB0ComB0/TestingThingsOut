import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/semantic-props';
import { cn } from '../../lib/utils';

function Nav({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof motion.nav extends React.FC<infer P> ? P : never;
  return (
    <>
        <nav {...attributes} className={cn('', className)} style={style}>
          {children}
        </nav>
    </>
  );
}
export default memo(Nav);
