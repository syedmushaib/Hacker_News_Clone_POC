import React, { useState } from 'react';
import Link from 'next/link';
// import styles from './layout.module.css';
import HeaderSection from './header-section';
import HeaderComponent from './header-comp';
// import utilStyles from '../styles/utils.module.css';


function Layout({ children }) {
  const [nextPage, setNextPage] = useState(1);
  const updateNextPage = (np) => {
    setNextPage(np);
  };

  console.log('nextPage', nextPage);
  return (
    <div >
      {/* meta tags and other html head supported tag are included inside "HeaderSection" */}
      <HeaderSection/>
  
      <header>
        <HeaderComponent/>
      </header>

      <main>{children}</main>

      <footer>
        <Link href="/news-page/[id]" as={`/news-page/${String(nextPage)}`}>
          <a onClick={() => updateNextPage(nextPage + 1)}>Read</a>
        </Link>
      </footer>

    </div>
  )
}


export default Layout;