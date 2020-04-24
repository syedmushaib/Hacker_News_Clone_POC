import Head from 'next/head';
import Layout from '../components/layout';
import { getItems } from '../libs/fetchApi';
import NewsItems from '../components/news-item';



function Home(props) {
  const {data, numberOfPages} = props;
  return (
    <Layout >
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
  return {
    props: {
      data: resData.props.data
    }
  }
}

export default Home;