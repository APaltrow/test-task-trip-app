import { FC } from 'react';

import errorIcon from '@assets/images/error.svg';

import style from './Error.module.scss';

interface ErrorProps {
  errorMessage: string | null;
}

export const Error: FC<ErrorProps> = ({ errorMessage }) => {
  if (!errorMessage) return null;
  return (
    <div className={style.error}>
      <img
        className={style.error_img}
        src={errorIcon}
        alt="Error icon"
      />
      <p className={style.error_text}>{errorMessage}</p>
    </div>
  );
};
