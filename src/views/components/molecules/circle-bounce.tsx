import type { NextComponentType, NextPageContext } from 'next';
import { useEffect } from 'react';
import classNames from 'classnames';
import { gsap } from '@/core/infrastructures/gsap';
import { bounceRepeat } from '@/libs/animation/tween';
import { setAlpha } from '@/libs/animation/util';
import s from '@/styles/scss/modules/molecules/circle-bounce.module.scss';

export type CircleBounceType = {
  id: string;
  className?: string;
};

/** @description y: -200 から y: 0で落ちてくる 丸の無限アニメーション */
export const CircleBounce: NextComponentType<NextPageContext, null, CircleBounceType> = ({
  id,
  className = '',
}) => {
  useEffect(() => {
    setAlpha(gsap, `#${id}`, { y: -200 });
    bounceRepeat(gsap, id).play();
  }, [id]);

  return <div id={id} className={classNames(className, s.circleBounce)} />;
};
