import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/semantic-props';
import { cn } from '../../lib/utils';

function Aside({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof motion.aside extends React.FC<infer P> ? P : never;
  return (
    <>
        <aside {...attributes} className={cn('', className)} style={style}>
          {children}
        </aside>

    </>
  );
}
export default memo(Aside);
