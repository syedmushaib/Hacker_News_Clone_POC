import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import { getItems } from '../libs/fetchApi';
import NewsItems from '../components/news-item';
import { filterAndHideItem, updateVoteCount } from '../libs/utils';

function Home({data, page}) {
  const [items, setItems] = useState(data);

  const hideFn = (toBeHide) => {
    setItems(filterAndHideItem(items, toBeHide));
  };

  const updateVote = (toBeSrch) => {
    const res = updateVoteCount(items, toBeSrch);
    setItems(res);
  };

  return (
    <Layout page={page}>
    <div className="container">
      <Head>
        <title>Hacker News POC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {items.map(item => {
          return (
            <NewsItems hideFn={hideFn}  updateVote={updateVote} {...item}/>
          );
        })}
      </div>
    </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const resData = await getItems('0');
  const { data, page } = resData.props;
  return {
    props: {
      data,
      page
    }
  }
}

export default Home;