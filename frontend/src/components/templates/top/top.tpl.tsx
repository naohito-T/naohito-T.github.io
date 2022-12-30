import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { Sns } from '@/schemas';
import { displayFlex } from '@/styles/modules';
import { TopSection } from '@/components/organisms';

type Props = {
  snsList?: Sns[];
  className?: string;
};

const Wrapper = styled.div`
  width: 100%;
  ${displayFlex({})}
  .top {
    height: 100%;
  }

  .content {
    padding: 10vw 5% 5vw;
  }

  .item {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 10vw;
  }

  .item:nth-child(odd) {
    flex-direction: row-reverse;
  }

  .item .image {
    width: 35%;
    max-height: 300px;
    height: 15vw;
    overflow: visible;
  }

  .item .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .item .text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 5%;
    background: rgb(32 32 32 / 75%);
    border-radius: 8px;
  }
`;

export const TopTpl: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <Wrapper className={className} data-testid='top-tpl'>
      <TopSection />
      <div className='content'>
        <div className='item'>
          <div className='image' data-scroll-speed='-2'>
            <img
              src='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
              alt=''
            />
          </div>
          <div className='text' data-y='-8rem' data-scroll-speed='-1'>
            <p>Fashion</p>
          </div>
        </div>

        <div className='item'>
          <div className='image'>
            <img
              src='https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
              alt=''
            />
          </div>
          <div className='text' data-y='-50'>
            <p>Nature</p>
          </div>
        </div>

        <div className='item'>
          <div className='image' data-y='-100'>
            <img
              src='https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
              alt=''
            />
          </div>
          <div className='text' js-parallax>
            <p>Fashion</p>
          </div>
        </div>
      </div>
      <div className='separate'>
        <img
          className=''
          data-y='-20vw'
          src='https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        />
      </div>
    </Wrapper>
  );
};
