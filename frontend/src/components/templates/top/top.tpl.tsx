import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { Sns } from '@/schemas';

type Props = {
  snsList: Sns[];
};

const Wrapper = styled.div``;

export const TopTpl: NextComponentType<NextPageContext, null, Props> = ({}) => {
  return (
    <Wrapper className='top-tpl' data-testid='top-tpl'>
      <div className='main'>
        <h2 className='title'>naohito-T.github.io</h2>
        <p className='sub-title'>Code as you design.</p>
        <p className='sub-title'>Software Engineer</p>
      </div>
    </Wrapper>
  );
};
