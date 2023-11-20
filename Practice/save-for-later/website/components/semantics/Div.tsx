import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/semantic-props';
import { cn } from '../../lib/utils';

function Div({ framer, children, className, style, framerProps, attributes, key }: SemanticProps) {
  type SectionMotionProps = typeof motion.div extends React.FC<infer P> ? P : never;
  return (
    <>
        <div {...attributes} className={cn('', className)} style={style}>
          {children}
        </div>
    </>
  );
}

export default memo(Div);
