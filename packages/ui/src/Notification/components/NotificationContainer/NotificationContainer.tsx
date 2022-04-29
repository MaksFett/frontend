import { VFC } from 'react';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';

import { NOTIFY_POSITIONS } from '../../constants';

import { ToastContainerStyled } from './styled';

injectStyle();

export interface NotificationContainerProps extends ToastContainerProps {}

export const NotificationContainer: VFC<NotificationContainerProps> = (
  props
) => {
  return (
    <ToastContainerStyled>
      <ToastContainer
        hideProgressBar
        pauseOnFocusLoss
        position={NOTIFY_POSITIONS.BOTTOM_RIGHT}
        newestOnTop={false}
        closeOnClick={false}
        draggable={false}
        rtl={false}
        {...props}
        closeButton={false}
        bodyClassName="notify__body"
        toastClassName="notify"
        progressClassName="notify__progress"
        className="notify__container"
      />
    </ToastContainerStyled>
  );
};
