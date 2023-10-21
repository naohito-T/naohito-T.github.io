import type { NextComponentType, NextPageContext } from 'next';
import classNames from 'classnames';
import s from '@/styles/scss/modules/organisms/intro.module.scss';

type Props = {
  className?: string;
};

/** @description ファーストビューのセクション */
export const Intro: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <section className={classNames(className, s.intro)} data-testid='Intro'>
      <div className={s.contents} data-scroll-section>
        <div>
          <h2 className={s.title} data-scroll data-scroll-speed='2'>
            naohito-T.github.io
          </h2>
          <p className={s.description} data-scroll data-scroll-speed='1'>
            Code as you design.
          </p>
          <p className={s.description} data-scroll data-scroll-speed='1'>
            Software Engineer
          </p>
          <span className={s.border}></span>
        </div>
        <div className={s.scrollDown}>
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
};
