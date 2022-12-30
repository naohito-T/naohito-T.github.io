import { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/molecules';
import { CubeProps } from '@/components/organisms';
import styled from 'styled-components';

type LayoutProps = {
  // 右クリックを禁止するか default false
  disableRightClick?: boolean;
  readonly children: Required<React.ReactNode>;
};

const Cube = dynamic<CubeProps>(
  () => import('@/components/organisms').then((module) => module.Cube),
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
  return (
    <Wrapper
      className='layout'
      onContextMenu={(e) => disableRightClick && e.preventDefault()}
      data-testid='layout'
    >
      <Header className='header' />
      <Cube className='cube' />
      {children}
    </Wrapper>
  );
};
