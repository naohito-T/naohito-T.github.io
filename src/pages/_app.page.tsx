import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '@/styles/scss/reset.scss';
import '@/styles/scss/base.scss';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { ThemeTpl } from '@/views/components/templates/theme/theme.tpl';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeTpl>
      <Component {...pageProps} />
    </ThemeTpl>
  );
};

export default App;
