import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';

type Props = {
  className?: string;
  readonly children: Required<React.ReactNode>;
};

const Wrapper = styled.p`
  width: 48px;
  height: 48px;
  background-color: red;
  border-radius: 50%;
  line-height: 48px;
  text-align: center;
`;

export const Circle: NextComponentType<NextPageContext, null, Props> = ({
  className = '',
  children,
}) => {
  return (
    <Wrapper className={className} data-testid='circle'>
      {children}
    </Wrapper>
  );
};
