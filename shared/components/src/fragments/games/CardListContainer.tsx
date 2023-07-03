import clsx from 'clsx';

import styles from './game.module.css';
import type { PropsWithChildren, FC } from 'react';

export interface CardListContainerProps {
  className?: string;
}

const CardListContainer: FC<PropsWithChildren<CardListContainerProps>> = ({
  children,
  className,
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.grid}>{children}</div>
    </div>
  );
};

export default CardListContainer;
