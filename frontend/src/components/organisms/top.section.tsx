import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { displayFlex } from '@/styles/modules';

type Props = {
  className?: string;
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

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
      }

      .desc {
        line-height: 1;
        display: block;
        font-size: 1.5rem;
        font-weight: bold;
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
      left: -20px;
      top: -50px;
      color: #eee;
      font-size: 0.7rem;
      letter-spacing: 0.05em;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 1px;
      height: 50px;
      background: #eee;
      animation: path-move 1.4s ease-in-out infinite;
      opacity: 0;
    }
  }

  @keyframes path-move {
    0% {
      height: 0;
      top: 0;
      opacity: 0;
    }
    30% {
      height: 50px;
      opacity: 1;
    }
    100% {
      height: 0;
      top: 50px;
      opacity: 0;
    }
  }
`;

export const TopSection: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <Wrapper className={className} data-testid='top-section'>
      <div className='top-wrap'>
        <div className='top-title'>
          <h2 className='title'>naohito-T.github.io</h2>
          <p className='desc'>Code as you design.</p>
          <p className='desc'>Software Engineer</p>
          <span className='border'></span>
        </div>
      </div>
      <div className='scroll-down'>
        <span>Scroll</span>
      </div>
    </Wrapper>
  );
};
