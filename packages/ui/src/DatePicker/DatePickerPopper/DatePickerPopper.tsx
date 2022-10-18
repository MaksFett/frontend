import { PropsWithChildren } from 'react';
import { PopperProps } from '@mui/material';

import { useEscapeClickEffect } from '../../hooks/useEscapeClickEffect';

import { DatePickerPopoverInner, PopperWrapper } from './styles';

export type DatePickerProps = PropsWithChildren<
  Omit<PopperProps, 'children'>
> & {
  onClose?: () => void;
};

export const DatePickerPopper = ({
  children,
  onClose,
  ...props
}: DatePickerProps) => {
  useEscapeClickEffect({ onEscape: onClose, isActive: props.open });

  return (
    <PopperWrapper
      {...props}
      placement="bottom-start"
      disablePortal
      modifiers={[
        {
          name: 'offset',
          options: {
            // использование отступов для соответствия с дизайном, 0 по горизонтали, 8px по вертикали
            offset: [0, 8],
          },
        },
      ]}
    >
      <DatePickerPopoverInner>{children}</DatePickerPopoverInner>
    </PopperWrapper>
  );
};