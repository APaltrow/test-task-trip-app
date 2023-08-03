import { FC } from 'react';

import style from './CustomModal.module.scss';

interface ModalProps {
  children: React.ReactNode;
  isVisible: boolean;

  handleModal: (arg: boolean) => void;
}

export const CustomModal: FC<ModalProps> = ({
  children,
  isVisible,
  handleModal,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className={style.modal}
      onClick={() => handleModal(false)}
    >
      <div
        className={style.content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
