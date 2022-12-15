import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { MediaSP } from '@/styles/modules';
import { AppMetaConfig } from '@/configs';

type Props = {
  className?: string;
};

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  background: transparent;
  z-index: 10;
  user-select: none;

  /* .title {
    font-size: 3.3rem;
    font-weight: bold;
    padding: 0.5rem 1rem;

    ${MediaSP`
      font-size: 2rem;
    `}
  } */
`;

export const Header: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <Wrapper className={className} data-testid='header'>
      <h1 className='title'>{AppMetaConfig.PAGE_TITLE}</h1>
    </Wrapper>
  );
};
