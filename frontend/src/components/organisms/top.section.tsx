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

  .top-title {
    ${displayFlex({})};
    height: 100%;
    text-transform: uppercase;

    .title {
      font-size: 2rem;
      font-weight: bold;
    }

    .desc {
      display: block;
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .scroll-down {
    position: absolute;
    left: 50%;
    bottom: 10px;
    height: 50px;

    span {
      position: absolute;
      left: -25px;
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
      height: 30px;
      background: #eee;
      animation: path-move 1.4s ease-in-out infinite;
      opacity: 0;
    }
  }

  /*高さ・位置・透過が変化して線が上から下に動く*/
  @keyframes path-move {
    0% {
      height: 0;
      top: 0;
      opacity: 0;
    }
    30% {
      height: 30px;
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
      <div className='top-title'>
        <h2 className='title'>naohito-T.github.io</h2>
        <span className='desc'>
          Code as you design.
          <br />
          Software Engineer
        </span>
      </div>
      <div className='scroll-down'>
        <span>Scroll</span>
      </div>
    </Wrapper>
  );
};
