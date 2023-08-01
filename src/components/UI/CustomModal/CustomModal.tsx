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
  return (
    <div
      className={isVisible ? style.modal_active : style.modal_closed}
      onClick={() => handleModal(false)}
    >
      <div
        className={isVisible ? style.content_active : style.content_closed}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
