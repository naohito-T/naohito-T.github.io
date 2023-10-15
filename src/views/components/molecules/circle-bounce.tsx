import type { NextComponentType, NextPageContext } from 'next';
import { useEffect } from 'react';
import classNames from 'classnames';
import { AppGSAP } from '@/libs/animation/base';
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
    setAlpha(AppGSAP.appGsap, `#${id}`, { y: -200 });
    bounceRepeat(AppGSAP.appGsap, id).play();
  }, [id]);

  return <div id={id} className={classNames(className, s.circleBounce)} />;
};
