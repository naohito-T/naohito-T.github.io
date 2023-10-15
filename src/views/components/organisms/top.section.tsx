import type { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { displayFlex, MediaSP } from '@/styles/scss/modules';

type Props = {
  className?: string;
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100svh;

  .top-wrap {
    ${displayFlex({})};
    height: 100%;

    .top-title {
      ${displayFlex({
        alignItems: 'flex-start',
      })};
      height: 100%;
      text-transform: uppercase;

      .title {
        font-size: 3rem;
        font-weight: bold;

        ${MediaSP`
          font-size: 1.8rem;
        `}
      }

      .desc {
        line-height: 1;
        display: block;
        font-size: 1.5rem;
        font-weight: bold;

        ${MediaSP`
          font-size: 1rem;
        `}
      }
    }

    .border {
      border-bottom: 1px solid #fff;
      display: block;
      height: 1px;
      width: 70%;
      margin: 15px 0;
    }
  }

  .scroll-down {
    position: absolute;
    left: 50%;
    bottom: 10px;
    height: 50px;

    span {
      position: absolute;
      left: -30px;
      top: -50px;
      color: #eee;
      font-size: 1rem;
      letter-spacing: 0.05em;

      ${MediaSP`
          left: -20px;
          font-size: 0.9rem;
      `}
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 1px;
      height: 80px;
      background: #eee;
      animation: path-move 1.4s ease-in-out infinite;
      opacity: 0;
    }
  }

  @keyframes path-move {
    0% {
      height: 0;
      top: -15px;
      opacity: 0;
    }
    30% {
      height: 80px;
      opacity: 1;
    }
    100% {
      height: 0;
      top: 80px;
      opacity: 0;
    }
  }
`;

export const TopSection: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <Wrapper className={className} data-testid='top-section'>
      <div className='top-wrap'>
        <div className='top-title' data-scroll-section>
          <h2 className='title' data-scroll data-scroll-speed='2'>
            naohito-T.github.io
          </h2>
          <p className='desc' data-scroll data-scroll-speed='1'>
            Code as you design.
          </p>
          <p className='desc' data-scroll data-scroll-speed='1'>
            Software Engineer
          </p>
          <span className='border'></span>
        </div>
      </div>
      <div className='scroll-down'>
        <span>Scroll</span>
      </div>
    </Wrapper>
  );
};
