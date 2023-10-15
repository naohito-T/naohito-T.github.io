import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { Sns } from '@/schemas';
import { TopSection, CenterSection } from '~/views/components/organisms';
import { Footer } from '~/views/components/molecules';

type Props = {
  snsList?: Sns[];
  className?: string;
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const TopTpl: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <Wrapper className={className} data-testid='top-tpl' data-scroll-section>
      <TopSection />
      <CenterSection />
      {/* <div className='content'>
        <a href='https://github.com/naohito-T' target='_blank' rel='noreferrer' className='sns'>
          <div className='item'>
            <div className='image' data-scroll-speed='-2'>
              <img src='front.webp' alt='portfolio' />
            </div>
            <div className='text' data-y='-8rem' data-scroll-speed='-1'>
              <p>Portfolio</p>
            </div>
          </div>
        </a>

        <a href='https://moderato.vercel.app/' target='_blank' rel='noreferrer' className='sns'>
          <div className='item'>
            <div className='image'>
              <img
                src='https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
                alt=''
              />
            </div>
            <div className='text' data-y='-50'>
              <p>Blog</p>
            </div>
          </div>
        </a>

        <a
          href='https://mobile.twitter.com/naohito___t'
          target='_blank'
          rel='noreferrer'
          className='sns'
        >
          <div className='item'>
            <div className='image' data-y='-100'>
              <img
                src='https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
                alt=''
              />
            </div>
            <div className='text'>
              <p>Books</p>
            </div>
          </div>
        </a>

        <a
          href='https://naohito-t.github.io/naopedia/'
          target='_blank'
          rel='noreferrer'
          className='sns'
        >
          <div className='item'>
            <div className='image' data-y='-100'>
              <img
                src='https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
                alt=''
              />
            </div>
            <div className='text'>
              <p>knowledge</p>
            </div>
          </div>
        </a>
      </div> */}

      <Footer className='footer' />
    </Wrapper>
  );
};
