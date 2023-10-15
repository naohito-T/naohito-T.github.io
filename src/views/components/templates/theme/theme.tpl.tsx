import type { NextComponentType, NextPageContext } from 'next';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme, MediaSP, MediaPC } from '@/styles/modules';

type Props = {
  readonly children: Required<React.ReactNode>;
};

const GlobalStyle = createGlobalStyle`
  .pc {
    display: block;
    ${MediaSP`
      display: none;
    `}
  }
  .sp {
    display: block;
    ${MediaPC`
      display: none;
    `}
  }
`;

/**
 * @desc _app.page.tsxからstyleだけを抜いたtemplate
 */
export const ThemeTpl: NextComponentType<NextPageContext, null, Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      {children}
    </ThemeProvider>
  );
};
