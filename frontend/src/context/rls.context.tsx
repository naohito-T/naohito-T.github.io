import { useRef } from 'react';
import type { NextComponentType, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

type Props = {
  readonly children: Required<React.ReactNode>;
};

export const RLSProvider: NextComponentType<NextPageContext, null, Props> = ({ children }) => {
  const { asPath } = useRouter();
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
      }}
      watch={[]}
      location={asPath}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
      containerRef={containerRef}
    >
      {children}
    </LocomotiveScrollProvider>
  );
};
