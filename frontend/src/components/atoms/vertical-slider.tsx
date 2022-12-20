import { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { AppGSAP } from '@/libs/animation/base';
import { timeSlider } from '@/libs/animation/tween';

export type VerticalTimelineSliderProps = {
  id?: string;
  className?: string;
  readonly children: Required<React.ReactNode>;
};

const Wrapper = styled.div``;

export const VerticalTimelineSlider: NextComponentType<
  NextPageContext,
  null,
  VerticalTimelineSliderProps
> = ({ id = '', className = '', children }) => {
  useEffect(() => {
    timeSlider(AppGSAP.appGsap).play();
  }, []);

  return (
    <Wrapper id={id} className={className}>
      <div className='vertical-slider'>{children}</div>
    </Wrapper>
  );
};
