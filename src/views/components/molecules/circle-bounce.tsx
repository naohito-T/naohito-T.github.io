import type { NextComponentType, NextPageContext } from 'next';
import { useEffect } from 'react';
import styled from 'styled-components';
import { AppGSAP } from '@/libs/animation/base';
import { bounceRepeat } from '@/libs/animation/tween';
import { setAlpha } from '@/libs/animation/util';

export type CircleBounceType = {
  id: string;
  className?: string;
};

const Wrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: red;
`;

/** @description y: -200 から y: 0で落ちてくる 丸の無限アニメーション */
export const CircleBounce: NextComponentType<NextPageContext, null, CircleBounceType> = ({
  id,
  className = '',
}) => {
  useEffect(() => {
    setAlpha(AppGSAP.appGsap, `#${id}`, { y: -200 });
    bounceRepeat(AppGSAP.appGsap, id).play();
  }, [id]);

  return <Wrapper id={id} className={className} />;
};
