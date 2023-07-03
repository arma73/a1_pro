import clsx from 'clsx';

import styles from './button.module.css';
import type {
  PropsWithChildren,
  FC,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from 'react';

export interface PrimaryButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

const PrimaryButton: FC<PropsWithChildren<PrimaryButtonProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};

export default PrimaryButton;
