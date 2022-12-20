import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { useEffect } from 'react';
import { AppGSAP } from '@/libs/animation/base';
import { repeatYoyoStagger } from '@/libs/animation/tween';

export type YoyoType = {
  id?: string;
  className?: string;
  readonly children: Required<React.ReactNode>;
};

const Wrapper = styled.div``;

export const Yoyo: NextComponentType<NextPageContext, null, YoyoType> = ({
  id = '',
  className = '',
  children,
}) => {
  useEffect(() => {
    repeatYoyoStagger(AppGSAP.appGsap).play();
  }, []);

  return (
    <Wrapper id={id} className={className}>
      <div className='vertical-slider'>{children}</div>
    </Wrapper>
  );
};
