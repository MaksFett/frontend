import { Components } from '@mui/material';

import type { Theme } from '../baseTheme';

import { MuiInputBase } from './MuiInputBase';
import { MuiFormHelperText } from './MuiFormHelperText';
import { MuiFormLabel } from './MuiFormLabel';
import { MuiInputLabel } from './MuiInputLabel';
import { MuiOutlinedInput } from './MuiOutlinedInput';
import { MuiTypography } from './MuiTypography';
import { MuiAutocomplete } from './MuiAutocomplete';

export type FontsUrls = {
  bold: {
    woff: string;
    woff2: string;
  };
  light: {
    woff: string;
    woff2: string;
  };
  medium: {
    woff: string;
    woff2: string;
  };
  regular: {
    woff: string;
    woff2: string;
  };
};

const getMuiCssBaseline = (
  fontUrls: FontsUrls
): Components['MuiCssBaseline'] => ({
  styleOverrides: `
    @font-face {
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 300;
      font-display: swap;
      src: url(${fontUrls.light.woff2}) format('woff2'), url(${fontUrls.light.woff}) format('woff');
    }
    @font-face {
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 400;
      font-display: swap;
      src: url(${fontUrls.regular.woff2}) format('woff2'), url(${fontUrls.regular.woff}) format('woff');
    }
    @font-face {
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 500;
      font-display: swap;
      src: url(${fontUrls.medium.woff2}) format('woff2'), url(${fontUrls.medium.woff}) format('woff');
    }
    @font-face {
      font-family: 'Ubuntu';
      font-style: 'normal';
      font-weight: 700;
      font-display: swap;
      src: url(${fontUrls.bold.woff2}) format('woff2'), url(${fontUrls.bold.woff}) format('woff');
    }
  `,
});

const MuiCheckbox: Components['MuiCheckbox'] = {
  defaultProps: {
    disableRipple: true,
  },
};

const MuiRadio: Components['MuiRadio'] = {
  defaultProps: {
    disableRipple: true,
  },
};

const MuiMenu: Components<Theme>['MuiMenu'] = {
  defaultProps: {
    autoFocus: false,
  },
  styleOverrides: {
    paper({ theme }: { theme: Theme }) {
      return {
        marginTop: theme.spacing(2),
        '&.MuiPaper-root': {
          borderRadius: theme.shape.small,
          boxShadow: theme.elevation[200],
        },
      };
    },
    list({ theme }: { theme: Theme }) {
      return {
        padding: theme.spacing(1, 0),
      };
    },
  },
};

const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        '&:hover': {
          backgroundColor: theme.palette.background.elementHover,
        },
      };
    },
  },
};

const MuiDialog: Components<Theme>['MuiDialog'] = {
  styleOverrides: {
    root() {
      return {
        background: 'rgba(20, 42, 67, 0.54)',
      };
    },
    paper({ theme }: { theme: Theme }) {
      return {
        borderRadius: theme.shape.small,
      };
    },
  },
};

const MuiDialogTitle: Components<Theme>['MuiDialogTitle'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        padding: theme.spacing(6),
        fontSize: theme.typography.pxToRem(24),
        '& .ButtonUnstyled-root': {
          position: 'absolute',
          right: theme.spacing(5),
          top: theme.spacing(5),
          color: theme.palette.grey[800],
        },
      };
    },
  },
};

const MuiDialogContent: Components<Theme>['MuiDialogContent'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        padding: theme.spacing(0, 6),
      };
    },
  },
};

const MuiDialogActions: Components<Theme>['MuiDialogActions'] = {
  styleOverrides: {
    root({ theme }: { theme: Theme }) {
      return {
        padding: theme.spacing(4, 6, 6, 6),
      };
    },
  },
};

export const getComponents = (fontUrls: FontsUrls): Components<Theme> => ({
  MuiCssBaseline: getMuiCssBaseline(fontUrls),
  MuiTypography,
  MuiInputBase,
  MuiInputLabel,
  MuiOutlinedInput,
  MuiFormLabel,
  MuiFormHelperText,
  MuiAutocomplete,
  MuiCheckbox,
  MuiMenu,
  MuiMenuItem,
  MuiRadio,
  MuiDialog,
  MuiDialogTitle,
  MuiDialogContent,
  MuiDialogActions,
});
