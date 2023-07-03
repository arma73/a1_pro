import { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './box.module.css';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';

type FlexTypes = 'none' | 'row' | 'col';
type BackgroundColorTypes = 'none' | 'primary';
type DirectionTypes = 'none' | 'center';
type MarginSizeTypes = 'none' | 'sm' | 'md';

type BoxProps<T extends keyof JSX.IntrinsicElements = 'div'> =
  ComponentPropsWithRef<T> & {
    className?: string;
    flex?: FlexTypes;
    bg?: BackgroundColorTypes;
    as?: T;
    direction?: DirectionTypes;
    margin?: MarginSizeTypes;
  };

const Box = forwardRef(
  <T extends keyof JSX.IntrinsicElements>(
    {
      children,
      as = 'div' as T,
      className,
      flex = 'none',
      margin = 'none',
      direction = 'none',
      bg = 'none',
      ...rest
    }: BoxProps<T>,
    externalRef: ForwardedRef<ComponentPropsWithRef<T>>
  ) => {
    const Tag = as as string;

    return (
      <Tag
        ref={externalRef}
        className={clsx(
          styles['box'],
          'shadow',
          'rounded',
          {
            [styles.flex]: flex !== 'none',
            [styles.row]: flex === 'row',
            [styles.colum]: flex === 'col',
            [styles.bgPrimary]: bg === 'primary',
            [styles.center]: direction === 'center',
            [styles['margin-sm']]: margin === 'sm',
            [styles['margin-md']]: margin === 'md',
          },
          className
        )}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
) as <T extends keyof JSX.IntrinsicElements>(props: BoxProps<T>) => JSX.Element;

export { Box, type BoxProps };
