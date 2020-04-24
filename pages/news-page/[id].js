import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout  from '../../components/layout';
import { getItems, getAllPageNumber} from '../../libs/fetchApi';
import NewsItems from '../../components/news-item';
import { filterAndHideItem, updateVoteCount } from '../../libs/utils';

let prePage;

function Page({data, page}) {

  const [items, setItems] = useState(data);
  
  if (page !== prePage) {
    setItems(data);
  } 

  prePage = page;

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
      </Head>

      <div>
        {items.map(item => {
          return (
            <NewsItems hideFn={hideFn} updateVote={updateVote} {...item}/>
          );
        })}
      </div>
    </div>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllPageNumber();
  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({params}) {
  const resData = await getItems(params.id);
  const { data, page } = resData.props;
  return {
    props: {
      data,
      page
    }
  }
}

export default Page;
