import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Wrapper = styled.section`
  width: 100%;
  height: 100svh;
  position: relative;

  .direction-block {
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 1;

    .direction-item {
      .text {
        color: #fff;
        font-size: 6rem;
        background-color: rgba(32, 32, 32, 0.75);
        display: block;
        padding: 0 20px;
        white-space: nowrap;
      }

      &.one {
        transform: translateX(-50vw) rotate(26deg);
      }

      &.three {
        transform: rotate(9deg);
      }

      &.four {
        transform: translateX(-60vw) rotate(-19deg);
      }

      &.five {
        transform: translateX(-20vw) rotate(3deg);
      }
    }
  }
`;

export const CenterSection: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <Wrapper className={className} data-testid='center-section' data-scroll-section>
      <div className='direction-block' id='direction'>
        <div className='direction-item one'>
          <span
            className='text'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='6'
          >
            ABCDEFGHIJKLMNOPQRSTUVWZ
          </span>
        </div>
        <div className='direction-item two'>
          <span
            className='text'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='-8'
          >
            And in this direction
          </span>
        </div>
        <div className='direction-item three'>
          <span
            className='text'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='3'
            data-scroll-delay='0.05'
          >
            Sooo customizable. Right?
          </span>
        </div>
        <div className='direction-item four'>
          <span
            className='text'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='15'
          >
            I can also go in this direction
          </span>
        </div>
        <div className='direction-item five'>
          <span
            className='text'
            data-scroll
            data-scroll-direction='horizontal'
            data-scroll-speed='-15'
          >
            Ok, enough!!!!
          </span>
        </div>
      </div>
    </Wrapper>
  );
};
