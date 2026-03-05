import { Html, Head, Main, NextScript } from 'next/document'

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel='icon' type='image/png' href='/favicon/favicon.png' />
        <link rel='apple-touch-icon' href='/favicon/favicon.png' />
        <link rel='manifest' href='/favicon/manifest.json' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
