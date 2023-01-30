import Head from 'next/head'
import 'animate.css'

function Page404() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <h1>404 - Page Not Found</h1>
      <p>The requested page could not be found.</p>
    </div>
  )
}

export default Page404
