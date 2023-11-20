import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { SemanticProps } from '../../types/semantic-props';
import { cn } from '../../lib/utils';

function Picture({ framer, framerProps, attributes, key, style, className, children }: SemanticProps) {
  type SectionMotionProps = typeof motion.picture extends React.FC<infer P> ? P : never;
  return (
    <>

        <picture {...attributes} className={cn('', className)} style={style}>
          {children}
        </picture>
    </>
  );
}

export default memo(Picture);
