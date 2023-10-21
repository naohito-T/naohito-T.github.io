import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render(): JSX.Element {
    const { locale } = this.props.__NEXT_DATA__;
    return (
      <Html lang={locale ?? 'ja'} dir='ltr'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:ital@1&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body id='body'>
          <noscript>JavaScriptを有効にしてください。</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
