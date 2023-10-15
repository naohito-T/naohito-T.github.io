import type { NextComponentType, NextPageContext } from 'next';
import classNames from 'classnames';
import { Constructor as C } from '@/configs';
import s from '@/styles/scss/modules/atoms/copyright.module.scss';

type Props = {
  className?: string;
  size: string;
};

//  1rem
export const Copyright: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <p className={classNames(className, s.copyright)}>
      <small>{C.COPYRIGHT}</small>
    </p>
  );
};
