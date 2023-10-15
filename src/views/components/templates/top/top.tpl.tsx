import type { NextComponentType, NextPageContext } from 'next';
import classNames from 'classnames';
import s from '@/styles/scss/modules/templates/top-tpl.module.scss';
import { Intro, About } from '@/views/components/organisms/top';

type Props = {
  className?: string;
};

export const TopTpl: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <div className={classNames(className, s.topTpl)} data-testid='TopTpl' data-scroll-section>
      <Intro />
      <About />
    </div>
  );
};
