import type { DocumentInitialProps } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render(): JSX.Element {
    /**
     * @note html要素にdir属性を指定すると、文書全体の書字方向を示すことができる。
     *   - 日本語や英語などの場合は、左から右へ記述するので ltr を指定する。
     *   - next.config.jsで設定しないとlocaleは取れない
     */
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

MyDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    } as unknown as DocumentInitialProps;
  } finally {
    sheet.seal();
  }
};
