import type { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import s from '@/styles/scss/modules/layouts/layout.module.scss';
import { Meta, Header, Footer } from '@/views/components/molecules';
import type { CubeProps } from '@/views/components/organisms';

type LayoutProps = {
  // 右クリックを禁止するか default false
  disableRightClick?: boolean;
  readonly children: Required<React.ReactNode>;
};

const Cube = dynamic<CubeProps>(
  () => import('@/views/components/organisms').then((module) => module.Cube),
  { ssr: false },
);

export const Layout: NextComponentType<NextPageContext, null, LayoutProps> = ({
  disableRightClick = false,
  children,
}) => {
  const { pathname, asPath } = useRouter();

  return (
    <>
      <Meta pageFullPath={pathname} pageAsPath={asPath} />
      <div
        className={s.layout}
        onContextMenu={(e) => disableRightClick && e.preventDefault()}
        data-testid='Layout'
      >
        <Header className={s.header} />
        <Cube className={s.cube} />
        {children}
        <Footer />
      </div>
    </>
  );
};
