import fetch from 'node-fetch';

export async function getItems(id) {
  // https://hn.algolia.com/api/v1/search?&page=0
  const baseUrl = 'https://hn.algolia.com/api/v1/search';
  const res = await fetch(`${baseUrl}?&page=${id}`);

  try {
    const json = await res.json();
    console.log('XXXXXXXX', json)
    const {hits, nbPages} = json;
    return {
      props: {
        nbPages, 
        data: hits
      },
    };
  } catch(err) {
    console.log(err);
    throw err;
  }
}



