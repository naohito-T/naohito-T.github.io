import type { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { Icon } from '@/views/components/atoms';

type Props = {
  className?: string;
};

const SnsWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 1.5rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border: 1px solid;
  border-radius: 20px;

  .icon-wrap {
    position: absolute;
    top: 30%;
    left: 2%;
  }
`;

export const SnsList: NextComponentType<NextPageContext, null, Props> = ({ className }) => {
  return (
    <SnsWrapper className={className}>
      <div>
        <div className='icon-wrap'>
          <Icon typeIcon='blog' fontSize='large' />
        </div>
      </div>

      <div>
        <div className='icon-wrap'>
          <Icon typeIcon='twitter' fontSize='large' />
        </div>
      </div>

      <div>
        <div className='icon-wrap'>
          <Icon typeIcon='github' fontSize='large' />
        </div>
      </div>
    </SnsWrapper>
  );
};
