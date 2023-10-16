import type { NextComponentType, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

type Props = {
  readonly children: Required<React.ReactNode>;
};

export const RLSProvider: NextComponentType<NextPageContext, null, Props> = ({ children }) => {
  const containerRef = useRef(null);
  const { asPath } = useRouter();

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
      }}
      watch={[asPath]}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
};
