import Head from 'next/head';
import Layout  from '../../components/layout';
import { getItems, getAllPageNumber} from '../../libs/fetchApi';
import NewsItems from '../../components/news-item';

export default function Page({data}) {
  return (
    <Layout>
    <div className="container">
      <Head>
        <title>Hacker News POC</title>
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

export const getStaticPaths = async () => {
  const paths = getAllPageNumber();
  console.log('paths', paths);
  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({params}) {
  const resData = await getItems(params.id);
  const { data } = resData.props;
  return {
    props: {
      data
    }
  }
}
