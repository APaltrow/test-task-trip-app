import { useState } from 'react';

type UseModalProps = () => [boolean, (arg: boolean) => void];

export const useModal: UseModalProps = () => {
  const [isVisible, setVisible] = useState(false);

  const handleModal = (arg: boolean) => {
    setVisible(arg);
  };

  return [isVisible, handleModal];
};
