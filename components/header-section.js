import Head from 'next/head';

function HeaderSection () {
    return (
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="HACKER NEWS"
          content="POC For Tesco"
        />
        <meta name="og:title" content= "HACKER NEWS POC" />
      </Head>
    )
}


export default HeaderSection;