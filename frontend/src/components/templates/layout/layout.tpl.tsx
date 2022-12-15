import { NextComponentType, NextPageContext } from 'next';

// import { Header } from '@/components/molecules';
import styled from 'styled-components';

type LayoutProps = {
  // 右クリックを禁止するか default false
  disableRightClick?: boolean;
  readonly children: Required<React.ReactNode>;
};

const Wrapper = styled.div`
  width: 100%;

  > .footer {
    height: 100vh;
  }
`;

const MainWrap = styled.main``;

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
      {/* <Header className='header' /> */}
      <MainWrap>{children}</MainWrap>
      {/* <Footer className='footer' data-testid='footer' /> */}
    </Wrapper>
  );
};
