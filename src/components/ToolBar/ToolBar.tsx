import { FC } from 'react';

import { Search } from '@components/UI';

import style from './ToolBar.module.scss';

//  TODO ======  Implement next and previous buttons
//  TODO ======  Sort trips by start trip date

export const ToolBar: FC = () => {
  return (
    <div className={style.toolbar_container}>
      <Search />
    </div>
  );
};
