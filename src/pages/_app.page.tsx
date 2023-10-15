import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
// import '@/styles/scss/reset.scss';
// import '@/styles/scss/base.scss';
import 'src/styles/scss/global.scss';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
