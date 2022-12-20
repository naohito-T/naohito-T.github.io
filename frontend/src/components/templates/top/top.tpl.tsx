import { NextComponentType, NextPageContext } from 'next';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { Sns } from '@/schemas';
import { displayFlex } from '@/styles/modules';
import { ParallaxSectionProps } from '@/components/organisms';
const ParallaxSection = dynamic<ParallaxSectionProps>(
  () => import('@/components/organisms').then((module) => module.ParallaxSection),
  { ssr: false },
);

type Props = {
  snsList?: Sns[];
};

const Wrapper = styled.div`
  width: 100%;
  ${displayFlex({})}
`;

export const TopTpl: NextComponentType<NextPageContext, null, Props> = ({}) => {
  return (
    <Wrapper className='top-tpl' data-testid='top-tpl'>
      <div className='main'>
        <h2 className='title'>naohito-T.github.io</h2>
        <p className='sub-title'>Code as you design.</p>
        <p className='sub-title'>Software Engineer</p>
      </div>
      <ParallaxSection />
    </Wrapper>
  );
};
