import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import 'src/styles/scss/global.scss';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
