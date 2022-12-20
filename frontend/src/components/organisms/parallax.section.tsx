import { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

import { AppGSAP } from '@/libs/animation/base';
import { Sns } from '@/schemas';

export type ParallaxSectionProps = {
  className?: string;
  snsList?: Sns[];
};

const Wrapper = styled.div`
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

export const ParallaxSection: NextComponentType<NextPageContext, null, ParallaxSectionProps> = ({
  className = ' ',
}) => {
  useEffect(() => {
    const parallaxList = AppGSAP.appGsap.utils.toArray<HTMLElement>('.js-parallax');

    parallaxList.forEach((wrap) => {
      // 設定値を取得する。
      const y = wrap.getAttribute('data-y') ?? -100;

      AppGSAP.appGsap.to(wrap, {
        y: y,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: 'bottom top',
          // scrub:1にするとスクロールごとに1秒間アニメーションされる。
          scrub: 0.5,
          //markers: true
        },
      });
    });
  }, []);

  return (
    <Wrapper className={className} data-testid='parallax-section'>
      <div className='content'>
        <div className='item'>
          <div className='image js-parallax'>
            <img
              src='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
              alt=''
            />
          </div>
          <div className='text js-parallax' data-y='-8rem'>
            <p>Fashion</p>
          </div>
        </div>

        <div className='item'>
          <div className='image js-parallax'>
            <img
              src='https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
              alt=''
            />
          </div>
          <div className='text js-parallax' data-y='-50'>
            <p>Nature</p>
          </div>
        </div>

        <div className='item'>
          <div className='image js-parallax' data-y='-100'>
            <img
              src='https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
              alt=''
            />
          </div>
          <div className='text js-parallax' data-y='-50'>
            <p>Fashion</p>
          </div>
        </div>
      </div>

      <div className='separate'>
        <img
          className='js-parallax'
          data-y='-20vw'
          src='https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
        />
      </div>
    </Wrapper>
  );
};
