import { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { displayFlex } from '@/styles/modules';
import { AppMetaConfig } from '@/configs';

import { VerticalTimelineSliderProps, Circle } from '@/components/atoms';
const VerticalTimelineSlider = dynamic<VerticalTimelineSliderProps>(
  () => import('@/components/atoms').then((module) => module.VerticalTimelineSlider),
  { ssr: false },
);

type Props = {
  className?: string;
};

const Wrapper = styled.header`
  background: transparent;
  z-index: 10;
  user-select: none;

  .timeline-wrapper {
    position: relative;
    padding: 0 2rem;

    .timeline {
      position: absolute;

      .circle {
      }
    }
  }

  .title {
    ${displayFlex({ alignItems: 'flex-start' })}
    height: 100%;
    margin-left: min(5rem);
  }
`;

export const Header: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <Wrapper className={className} data-testid='header'>
      <div className='timeline-wrapper'>
        <VerticalTimelineSlider className='timeline'>
          <Circle className='circle'>3</Circle>
          <Circle className='circle'>2</Circle>
          <Circle className='circle'>1</Circle>
        </VerticalTimelineSlider>
      </div>
      <h1 className='title'>{AppMetaConfig.PAGE_TITLE}</h1>
    </Wrapper>
  );
};
