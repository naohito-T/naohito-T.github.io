import { NextComponentType, NextPageContext } from 'next';
import styled from 'styled-components';
import { displayFlex, MediaSP } from '~/styles/modules';
import { Copyright } from '@/components/atoms';

type Props = {
  className?: string;
};

const Wrapper = styled.footer`
  height: 100vh;
  width: 100%;

  .footer-inner {
    ${displayFlex({ justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' })};
    height: 90%;
  }

  .footer-mail {
    ${displayFlex({})};
    width: 100%;
    overflow: hidden;

    .mail-text {
      font-size: 2rem;
      overflow: hidden;
      ${MediaSP`
        font-size: 1.5rem;
      `}
    }
  }

  .footer-copyright {
    height: 10%;
    text-align: center;
  }
`;

export const Footer: NextComponentType<NextPageContext, null, Props> = ({ className = '' }) => {
  return (
    <Wrapper className={className} data-testid='footer'>
      <div className='footer-inner'>
        <div className='footer-mail'>
          <h2 className='mail-text'>WORK CONTACT</h2>
          <h2 className='mail-text'>NAOHITO-T</h2>
        </div>
      </div>
      <Copyright className='footer-copyright' size='1rem' />
    </Wrapper>
  );
};
