import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout>
    <div className="container">
      <Head>
        <title>Hacker News POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>this is hacker news poc</div>
      </main>

    </div>
    </Layout>
  )
}
