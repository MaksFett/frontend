import { useMemo } from 'react';
import MuiTextField from '@mui/material/TextField';

import { FormHelperTextFactory } from '../FormHelperText';

import { TextFieldProps } from './types';

const successHelperText = (
  <FormHelperTextFactory
    path={
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99996 13.3334C6.58547 13.3334 5.22892 12.7715 4.22872 11.7713C3.22853 10.7711 2.66663 9.41451 2.66663 8.00002C2.66663 6.58553 3.22853 5.22898 4.22872 4.22878C5.22892 3.22859 6.58547 2.66669 7.99996 2.66669C9.41445 2.66669 10.771 3.22859 11.7712 4.22878C12.7714 5.22898 13.3333 6.58553 13.3333 8.00002C13.3333 9.41451 12.7714 10.7711 11.7712 11.7713C10.771 12.7715 9.41445 13.3334 7.99996 13.3334ZM8.90929 6.02402L7.47463 8.76402L6.44596 7.83735C6.38087 7.77878 6.30488 7.73361 6.22233 7.70441C6.13978 7.67521 6.05228 7.66255 5.96484 7.66716C5.8774 7.67177 5.79172 7.69356 5.7127 7.73129C5.63368 7.76901 5.56286 7.82193 5.50429 7.88702C5.44572 7.95211 5.40055 8.0281 5.37135 8.11065C5.34214 8.1932 5.32949 8.2807 5.3341 8.36814C5.33871 8.45558 5.3605 8.54126 5.39823 8.62028C5.43595 8.6993 5.48887 8.77012 5.55396 8.82869L7.22063 10.3287C7.29614 10.3967 7.3862 10.4465 7.48393 10.4744C7.58166 10.5023 7.68447 10.5074 7.7845 10.4895C7.88452 10.4715 7.97913 10.431 8.06107 10.3709C8.14301 10.3108 8.21013 10.2327 8.25729 10.1427L10.0906 6.64269C10.1727 6.48603 10.1891 6.3032 10.1364 6.13442C10.0836 5.96564 9.96595 5.82473 9.80929 5.74269C9.65264 5.66065 9.46981 5.6442 9.30103 5.69696C9.13224 5.74972 8.99133 5.86737 8.90929 6.02402Z"
        fill="#00875A"
      />
    }
    text="Проверка успешно пройдена"
  />
);

const errorHelperText = (
  <FormHelperTextFactory
    path={
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5109 2.65519C8.67288 2.72231 8.82004 2.82068 8.94399 2.94469L13.056 7.05602C13.1801 7.17998 13.2786 7.32719 13.3457 7.48922C13.4129 7.65126 13.4475 7.82495 13.4475 8.00036C13.4475 8.17577 13.4129 8.34946 13.3457 8.51149C13.2786 8.67353 13.1801 8.82073 13.056 8.94469L8.94399 13.056C8.82004 13.18 8.67288 13.2784 8.5109 13.3455C8.34893 13.4126 8.17532 13.4472 7.99999 13.4472C7.82466 13.4472 7.65104 13.4126 7.48907 13.3455C7.3271 13.2784 7.17993 13.18 7.05599 13.056L2.94399 8.94469C2.81988 8.82073 2.72142 8.67353 2.65424 8.51149C2.58707 8.34946 2.55249 8.17577 2.55249 8.00036C2.55249 7.82495 2.58707 7.65126 2.65424 7.48922C2.72142 7.32719 2.81988 7.17998 2.94399 7.05602L7.05599 2.94469C7.17993 2.82068 7.3271 2.72231 7.48907 2.65519C7.65104 2.58807 7.82466 2.55353 7.99999 2.55353C8.17532 2.55353 8.34893 2.58807 8.5109 2.65519ZM7.52858 9.13809C7.6536 9.26311 7.82317 9.33335 7.99998 9.33335C8.1768 9.33335 8.34636 9.26311 8.47139 9.13809C8.59641 9.01307 8.66665 8.8435 8.66665 8.66669V5.33335C8.66665 5.15654 8.59641 4.98697 8.47139 4.86195C8.34636 4.73692 8.1768 4.66669 7.99998 4.66669C7.82317 4.66669 7.6536 4.73692 7.52858 4.86195C7.40356 4.98697 7.33332 5.15654 7.33332 5.33335V8.66669C7.33332 8.8435 7.40356 9.01307 7.52858 9.13809ZM7.52858 11.1381C7.6536 11.2631 7.82317 11.3334 7.99998 11.3334C8.1768 11.3334 8.34636 11.2631 8.47139 11.1381C8.59641 11.0131 8.66665 10.8435 8.66665 10.6667C8.66665 10.4899 8.59641 10.3203 8.47139 10.1953C8.34636 10.0703 8.1768 10 7.99998 10C7.82317 10 7.6536 10.0703 7.52858 10.1953C7.40356 10.3203 7.33332 10.4899 7.33332 10.6667C7.33332 10.8435 7.40356 11.0131 7.52858 11.1381Z"
        fill="#F24646"
      />
    }
    text="Ошибка, проверка не пройдена"
  />
);

export const TextField = (props: TextFieldProps) => {
  const {
    variant,
    success,
    error,
    color: colorProp,
    helperText: helperTextProp,
    ...restProps
  } = props;

  const color = useMemo(() => {
    if (success) {
      return 'success';
    }

    return undefined;
  }, [success]);

  const helperText = useMemo(() => {
    if (success) {
      return successHelperText;
    }
    if (error) {
      return errorHelperText;
    }

    return helperTextProp;
  }, [helperTextProp, success, error]);

  return (
    <MuiTextField
      variant="outlined"
      error={error}
      color={color}
      helperText={helperText}
      {...restProps}
    />
  );
};

export default TextField;
