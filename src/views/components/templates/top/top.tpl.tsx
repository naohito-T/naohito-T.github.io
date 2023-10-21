import type { NextComponentType, NextPageContext } from 'next';
import classNames from 'classnames';
import s from '@/styles/scss/modules/templates/top-tpl.module.scss';
import { Footer } from '@/views/components/molecules';
import { Intro, About } from '@/views/components/organisms/top';

type Props = {
  className?: string;
};

/** @note data-scroll-sectionをつけること */
export const TopTpl: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <div className={classNames(className, s.topTpl)} data-testid='TopTpl'>
      <Intro />
      <About />
      <Footer />
    </div>
  );
};
