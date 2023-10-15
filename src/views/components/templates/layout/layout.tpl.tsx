import { NextComponentType, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { Header, Meta } from '@/views/components/molecules';
import { CubeProps } from '@/views/components/organisms';
import styled from 'styled-components';

type LayoutProps = {
  // 右クリックを禁止するか default false
  disableRightClick?: boolean;
  readonly children: Required<React.ReactNode>;
};

const Cube = dynamic<CubeProps>(
  () => import('~/views/components/organisms').then((module) => module.Cube),
  { ssr: false },
);

const Wrapper = styled.div`
  width: 100%;

  .header {
    position: fixed;
    width: 100%;
    height: 80px;
  }

  .cube {
    position: absolute;
    z-index: -10;
  }

  .main {
    padding-top: 80px;
    width: 100%;
  }
`;

export const Layout: NextComponentType<NextPageContext, null, LayoutProps> = ({
  disableRightClick = false,
  children,
}) => {
  const { pathname, asPath } = useRouter();

  return (
    <>
      <Meta pageFullPath={pathname} pageAsPath={asPath} />
      <Wrapper
        className='layout'
        onContextMenu={(e) => disableRightClick && e.preventDefault()}
        data-testid='layout'
      >
        <Header className='header' />
        <Cube className='cube' />
        {children}
      </Wrapper>
    </>
  );
};
