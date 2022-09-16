import { forwardRef } from 'react';
import { FabProps as MuiFabProps } from '@mui/material/Fab';

import { StyledFab } from './styles';
import { FabColor } from './types';
import { FabSizes } from './enums';

export type FabProps = Omit<MuiFabProps, 'color' | 'variant'> & {
  color?: FabColor;
  variant?: MuiFabProps['variant'] | 'square';
};

export const Fab = forwardRef<HTMLButtonElement, FabProps>(
  ({
    ref,
    variant = 'square',
    size = FabSizes.Large,
    color = 'primary',
    ...props
  }) => {
    return (
      <StyledFab
        {...props}
        variant={variant === 'square' ? 'circular' : variant}
        isSquare={variant === 'square'}
        size={size}
        color={color}
        ref={ref}
      />
    );
  },
);