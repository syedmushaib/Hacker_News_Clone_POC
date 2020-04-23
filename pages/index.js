import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getItems } from '../libs/items';
import NewsItems from '../components/news-item';
import fetch from 'node-fetch';

function Home( {data} ) {
  return (
    <Layout>
    <div className="container">
      <Head>
        <title>Hacker News POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        {data.map(item => {
          return (
            <NewsItems {...item}/>
          );
        })}
      </div>

    </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const resData = await getItems('0');
  console.log(resData);
  const {data} = resData.props;
  return {
    props: {
      data
    }
  }
}

// export async function getStaticProps() {
//   const res = await fetch('https://hn.algolia.com/api/v1/search?&page=0')
//   const json = await res.json() // better use it inside try .. catch
//   return {
//     props: {
//       stars: json.stargazers_count,
//     },
//   }
// }
export default Home;