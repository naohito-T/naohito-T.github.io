import { NextComponentType, NextPageContext } from 'next';

// import { Header } from '@/components/molecules';
import styled from 'styled-components';

type Props = {};

const Wrapper = styled.div``;

export const TopTpl: NextComponentType<NextPageContext, null, Props> = ({}) => {
  return <Wrapper className='top-tpl' data-testid='top-tpl'></Wrapper>;
};
