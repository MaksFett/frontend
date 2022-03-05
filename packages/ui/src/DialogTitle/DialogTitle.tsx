import { DialogTitle as MuiDialogTitle } from '@mui/material';

import { IconButton } from '../IconButton';

import { DialogTitleProps } from './types';

const svgCloseIcon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.00004 6.58599L1.70704 1.29299C1.51844 1.11083 1.26584 1.01004 1.00364 1.01232C0.741443 1.01459 0.490631 1.11976 0.305223 1.30517C0.119815 1.49058 0.0146453 1.74139 0.0123669 2.00359C0.0100885 2.26579 0.110883 2.51839 0.293041 2.70699L5.58604 7.99999L0.293041 13.293C0.110883 13.4816 0.0100885 13.7342 0.0123669 13.9964C0.0146453 14.2586 0.119815 14.5094 0.305223 14.6948C0.490631 14.8802 0.741443 14.9854 1.00364 14.9877C1.26584 14.9899 1.51844 14.8891 1.70704 14.707L7.00004 9.41399L12.293 14.707C12.4816 14.8891 12.7342 14.9899 12.9964 14.9877C13.2586 14.9854 13.5095 14.8802 13.6949 14.6948C13.8803 14.5094 13.9854 14.2586 13.9877 13.9964C13.99 13.7342 13.8892 13.4816 13.707 13.293L8.41404 7.99999L13.707 2.70699C13.8026 2.61474 13.8787 2.5044 13.9311 2.38239C13.9836 2.26039 14.0111 2.12917 14.0123 1.99639C14.0134 1.86361 13.9881 1.73193 13.9379 1.60904C13.8876 1.48614 13.8133 1.37449 13.7194 1.28059C13.6255 1.1867 13.5139 1.11245 13.391 1.06217C13.2681 1.01189 13.1364 0.986585 13.0036 0.987739C12.8709 0.988893 12.7396 1.01648 12.6176 1.06889C12.4956 1.1213 12.3853 1.19748 12.293 1.29299L7.00004 6.58599Z"
      fill="#1D3F66"
    />
  </svg>
);

export const DialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <MuiDialogTitle {...other}>
      {children}
      {onClose ? (
        <IconButton variant="text" onClick={onClose}>
          {svgCloseIcon}
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};
