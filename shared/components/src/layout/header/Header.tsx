import clsx from 'clsx';
import { Box } from '@standalone/shared/ui';
import type { PropsWithChildren, FC } from 'react';
import Logo from '../../logo/Logo';
import styles from './header.module.css';

export interface HeaderProps {
  className?: string;
}

const Header: FC<PropsWithChildren<HeaderProps>> = ({
  children,
  className,
}) => {
  return (
    <Box as="header" className={clsx(styles.header, className)}>
      <Logo />
      {children}
    </Box>
  );
};

export default Header;
