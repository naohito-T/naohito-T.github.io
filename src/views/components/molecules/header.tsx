import type { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import { Constructor as C } from '@/configs';
import s from '@/styles/scss/modules/molecules/header.module.scss';
import type { CircleBounceType } from './circle-bounce';

const CircleBounce = dynamic<CircleBounceType>(
  () => import('./circle-bounce').then((module) => module.CircleBounce),
  { loading: () => <></>, ssr: false },
);

type Props = {
  className?: string;
};

export const Header: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <header className={classNames(className, s.header)} data-testid='Header'>
      <div className={s.timelineWrapper}>
        <CircleBounce id='circle-bounce' />
      </div>
      <a href='https://github.com/naohito-T' target='_blank' rel='noreferrer'>
        <h1 className={s.title}>{C.PAGE_TITLE}</h1>
      </a>
    </header>
  );
};
