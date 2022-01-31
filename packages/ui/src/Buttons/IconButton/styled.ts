import styled from '@emotion/styled';

import { ButtonBase } from '../ButtonBase';
import { ButtonProps } from '../types';
import { ButtonSizes } from '../constants';
import { Theme } from '../../theme';

interface StyledIconButtonThemeProps extends ButtonProps {
  theme: Theme;
}

export const getButtonHeight = ({
  size,
}: StyledIconButtonThemeProps): string => {
  if (size === ButtonSizes.LARGE) return '40px';

  return '32px';
};

export const StyledIconButton = styled(ButtonBase, {
  shouldForwardProp: (prop) =>
    prop !== 'startIcon' && prop !== 'endIcon' && prop !== 'loading',
})<ButtonProps>`
  height: ${getButtonHeight};
  width: ${getButtonHeight};
  padding: ${({ theme }) => theme.spacing(1)};
`;
