import clsx from 'clsx';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import type { FC } from 'react';

interface PublicLayoutProps {
  className?: string;
}

const PublicLayout: FC<PublicLayoutProps> = ({ className }) => {
  return (
    <div className="wrapper">
      <div className={clsx('container', className)}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export { PublicLayout, type PublicLayoutProps };
