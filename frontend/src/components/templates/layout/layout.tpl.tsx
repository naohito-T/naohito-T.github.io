import { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/molecules';
import { InertialProps } from '@/components/organisms';
import styled from 'styled-components';

const Inertial = dynamic<InertialProps>(
  () => import('@/components/organisms').then((module) => module.Inertial),
  {
    ssr: false,
  },
);

type LayoutProps = {
  // 右クリックを禁止するか default false
  disableRightClick?: boolean;
  readonly children: Required<React.ReactNode>;
};

const Wrapper = styled.div`
  width: 100%;

  .header {
    position: fixed;
    width: 100%;
    height: 80px;
  }

  .main {
    padding-top: 80px;
    width: 100%;
  }

  /* > .footer {
    height: 100vh;
  } */
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
      <Inertial className='main'>{children}</Inertial>
      {/* <Inertial className='main' /> */}
      {/* <Footer className='footer' data-testid='footer' /> */}
    </Wrapper>
  );
};
