import '../styles/global.scss'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color='#73d0a2'
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
