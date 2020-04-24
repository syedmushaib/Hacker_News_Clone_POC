import React, { useState } from 'react';
import Link from 'next/link';
// import styles from './layout.module.css';
import HeaderSection from './header-section';
import HeaderComponent from './header-comp';
// import utilStyles from '../styles/utils.module.css';


function Layout({ children, page }) {
  return (
    <div >
      {/* meta tags and other html head supported tag are included inside "HeaderSection" */}
      <HeaderSection/>
  
      <header>
        <HeaderComponent/>
      </header>

      <main>{children}</main>

      <footer>
        <Link href="/news-page/[id]" as={`/news-page/${String(page + 1)}`}>
          <a>Read</a>
        </Link>
      </footer>

    </div>
  )
}


export default Layout;