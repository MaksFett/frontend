import { Story } from '@storybook/react';
import { Stack } from '@mui/material';

import { Button } from '../Button';

import { NotificationContainer } from './components/NotificationContainer';
import { NotificationTemplate } from './components/NotificationTemplate';
import { notify } from './Notification';

export default {
  argTypes: {
    icon: {
      name: 'icon',
      type: { name: 'Element', required: false },
      description: 'Иконка для NotificationTemplate',
      control: {
        type: null,
      },
    },
  },
  title: 'Components/Notification',
  component: NotificationTemplate,
};

const Template: Story = () => {
  const handleInfo = () => {
    notify.info({
      title: 'Внимание!',
    });
  };

  const handleFilledInfo = () => {
    notify.info({
      filled: true,
      title: 'Внимание!',
    });
  };

  const handledInfoWithContent = () => {
    notify.info({
      title: 'Внимание!',
      content: 'Все необходимые действия увенчались успехом в ходе обработки.',
      actions: <Button variant="light">Подробнее</Button>,
      actionsDirection: 'right',
    });
  };

  const handleSuccess = () => {
    notify.success({
      title: 'Операция успешно завершен',
    });
  };

  const handleFilledSuccess = () => {
    notify.success({
      filled: true,
      title: 'Операция успешно завершен',
    });
  };

  const handleSuccessWithContent = () => {
    notify.success({
      title: 'Операция успешно завершен',
      content: 'Все необходимые действия увенчались успехом в ходе обработки.',
      actions: <Button variant="light">Подробнее</Button>,
      actionsDirection: 'right',
    });
  };

  const handleWarning = () => {
    notify.warning({
      title: 'Внимание',
    });
  };

  const handleFilledWarning = () => {
    notify.warning({
      title: 'Внимание',
    });
  };

  const handleWarningWithContent = () => {
    notify.warning({
      title: 'Внимание',
      content: 'Внимание, внимание, все более менее.',
      actions: <Button variant="light">Подробнее</Button>,
      actionsDirection: 'right',
    });
  };

  const handleError = () => {
    notify.error({
      title: 'Соединение потеряно',
    });
  };

  const handleFilledError = () => {
    notify.error({
      title: 'Соединение потеряно',
    });
  };

  const handleErrorWithContent = () => {
    notify.error({
      title: 'Соединение потеряно',
      content: 'У вас куча ошибок.',
      actions: <Button variant="light">Подробнее</Button>,
      actionsDirection: 'right',
    });
  };

  return (
    <>
      <NotificationContainer autoClose={2500} />
      <Stack direction="row" gap={2}>
        <Stack direction="column" gap={2}>
          <Stack direction="column">
            <h2>Base notify </h2>
            <Stack direction="row" gap={2}>
              <Button onClick={handleInfo}>info</Button>
              <Button onClick={handleSuccess}>success</Button>
              <Button onClick={handleWarning}>warn</Button>
              <Button onClick={handleError}>error</Button>
            </Stack>
          </Stack>
          <Stack direction="column">
            <h2>Filled notify </h2>
            <Stack direction="row" gap={2}>
              <Button onClick={handleFilledInfo}>filled info</Button>
              <Button onClick={handleFilledSuccess}>filled success</Button>
              <Button onClick={handleFilledWarning}>filled warn</Button>
              <Button onClick={handleFilledError}>filled error</Button>
            </Stack>
          </Stack>
          <Stack direction="column">
            <h2>Notify with content and actions </h2>
            <Stack direction="row" gap={2}>
              <Button onClick={handledInfoWithContent}>filled info</Button>
              <Button onClick={handleSuccessWithContent}>filled success</Button>
              <Button onClick={handleWarningWithContent}>filled warn</Button>
              <Button onClick={handleErrorWithContent}>filled error</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export const Default = Template.bind({});

Default.parameters = {
  options: { showPanel: true },
  controls: { expanded: true },
};
