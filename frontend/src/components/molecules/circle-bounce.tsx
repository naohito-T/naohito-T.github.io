import { useEffect } from 'react';
import { AppGSAP } from '@/libs/animation/base';
import { bounceRepeat } from '@/libs/animation/tween';
import { setAlpha } from '@/libs/animation/util';
import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

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

/**
 * @desc y: -200 から y: 0で落ちてくる 丸の無限アニメーション
 */
export const CircleBounce: NextComponentType<NextPageContext, null, CircleBounceType> = ({
  id,
  className = '',
}) => {
  useEffect(() => {
    setAlpha(AppGSAP.appGsap, `#${id}`, { y: -200 });
    bounceRepeat(AppGSAP.appGsap, id).play();
  }, []);

  return <Wrapper id={id} className={className} />;
};
