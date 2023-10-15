import type { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Constructor as C } from '@/configs';
import { displayFlex } from '@/styles/modules';
import type { CircleBounceType } from './circle-bounce';

const CircleBounce = dynamic<CircleBounceType>(
  () => import('./circle-bounce').then((module) => module.CircleBounce),
  { loading: () => <></>, ssr: false },
);

type Props = {
  className?: string;
};

const Wrapper = styled.header`
  ${displayFlex({ alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' })}
  background: transparent;
  z-index: 10;
  user-select: none;
  height: 80px;

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
    height: 100%;
    line-height: 80px;
  }
`;

export const Header: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <Wrapper className={className} data-testid='header'>
      <div className='timeline-wrapper'>
        <CircleBounce id='circle-bounce' />
      </div>
      <a href='https://github.com/naohito-T' target='_blank' rel='noreferrer'>
        <h1 className='title'>{C.PAGE_TITLE}</h1>
      </a>
    </Wrapper>
  );
};