import { SyntheticEvent, useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';

import {
  Reason,
  backdropStackManager,
} from '../../services/BackdropStackManager';
/**
 * @description необязательные настройки для использоввания хука
 */
type Options = {
  /**
   * @default undefined
   * @description айдишка, которая записывается в стек при открытии, если не передана, будет сгенерирована автоматически
   */
  id?: string;
};

type ReturnElements = {
  /**
   * @initial false
   * @description стейт для контроля состояния открытости элемента, следует использовать, если у элемента могут быть свои дочерние всплываемые элементы
   */
  isOpened: boolean;
  /**
   * @description метод вызываемый при открытии элемента
   */
  handleOpen: () => void;
  /**
   * @description метод вызываемый при закрытии элемента, внутри него определяется состояние isOpened
   */
  handleClose: (event: SyntheticEvent<Element, Event>, reason?: Reason) => void;
};

type UseBackdropStackToggleFunc = (options?: Options) => ReturnElements;

/**
 * @description хук предназначен для быстрого использования backdropStackManager в реакт компонентах, хранит неуправляемый стейт, если вам нужно управлять этим стейтом, воспользуйтесь backdropStackManager в своем компоненте напрямую.
 */
export const useBackdropStackToggle: UseBackdropStackToggleFunc = ({
  id: parentId,
} = {}) => {
  const id = useRef<string>(parentId || nanoid());
  const { pop, push, remove } = backdropStackManager;

  const [isOpened, setOpened] = useState(false);
  const handleOpen = () => {
    push(id.current);
    setOpened(true);
  };

  const handleClose = (_: SyntheticEvent<Element, Event>, reason?: Reason) => {
    setOpened(!pop(id.current, reason));
  };

  useEffect(() => () => remove(id.current), []);

  return { isOpened, handleOpen, handleClose };
};