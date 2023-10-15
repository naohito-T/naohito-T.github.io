import type { NextComponentType, NextPageContext } from 'next';
import classNames from 'classnames';
import s from '@/styles/scss/modules/organisms/about.module.scss';

type Props = {
  className?: string;
};

/** @description 中段のセクション */
export const About: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <section className={classNames(className, s.about)} data-testid='About' data-scroll-section>
      {/* <div className='direction-block' id='direction'>
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
      </div> */}
    </section>
  );
};
