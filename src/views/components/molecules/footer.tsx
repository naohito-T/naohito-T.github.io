import type { NextComponentType, NextPageContext } from 'next';
import classNames from 'classnames';
import s from '@/styles/scss/modules/molecules/footer.module.scss';
import { Copyright } from '@/views/components/atoms';

type Props = {
  className?: string;
};

export const Footer: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <footer className={classNames(className, s.footer)} data-testid='Footer' data-scroll-section>
      <div className={s.inner}>
        <div className={s.email}>
          <h2 className={s.text} data-scroll data-scroll-speed='2'>
            WORK CONTACT
          </h2>
          <h2 className={s.text} data-scroll data-scroll-speed='1'>
            NAOHITO-T
          </h2>
        </div>
      </div>
      <Copyright className={s.copyright} size='1rem' />
    </footer>
  );
};
