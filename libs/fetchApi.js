import fetch from 'node-fetch';

export async function getItems(id) {
  // https://hn.algolia.com/api/v1/search?&page=0
  const baseUrl = 'https://hn.algolia.com/api/v1/search';
  const res = await fetch(`${baseUrl}?&page=${id}`);
  
  try {
    const json = await res.json();
    const {hits, page} = json;
    return {
      props: {
        data: hits,
        page
      },
    };
  } catch(err) {
    throw err;
  }
}


export function getAllPageNumber() {
  return [...Array(50).keys()].map( i => {
    let id = i + 1;
    return {
      params: {
        id: String(id)
      }
    };
  });
}


