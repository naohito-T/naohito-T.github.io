import { useEffect } from 'react';
import { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { main } from '@/libs/animation/inertial';
import { ParallaxSectionProps } from '@/components/organisms';
const ParallaxSection = dynamic<ParallaxSectionProps>(
  () => import('@/components/organisms').then((module) => module.ParallaxSection),
  { ssr: false },
);

export type InertialProps = {
  className?: string;
  // readonly children: Required<React.ReactNode>;
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  ul {
    width: 100%;
  }

  li {
    padding: 10vw 5vw;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const Inertial: NextComponentType<NextPageContext, null, InertialProps> = ({
  className = '',
  children,
}) => {
  useEffect(() => {
    main();
  }, []);
  return (
    <Wrapper className={`${className} js-inertial-scroll`}>
      <div className='content js-inertial-scroll_content'>
        <div className='top'>
          <p className='sub-title'>Code as you design.</p>
          <p className='sub-title'>Software Engineer</p>
        </div>
        <ParallaxSection />
        <ul>
          <li>
            <img
              src='https://images.pexels.com/photos/96428/pexels-photo-96428.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/1560424/pexels-photo-1560424.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/4587959/pexels-photo-4587959.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/1440406/pexels-photo-1440406.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
          <li>
            <img
              src='https://images.pexels.com/photos/4492150/pexels-photo-4492150.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=1260'
              alt=''
              loading='lazy'
            />
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
