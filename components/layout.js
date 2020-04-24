import React, { useState } from 'react';
import Link from 'next/link';
import HeaderSection from './header-section';
import HeaderComponent from './header-comp';
import styles from './newsItems.module.css';


function Layout({ children, page }) {
  return (
    <div >
      {/* meta tags and other html head supported tag are included inside "HeaderSection" */}
      <HeaderSection/>
  
      <header>
        <HeaderComponent/>
      </header>

      <main>{children}</main>

      <footer className={styles.more_btn}>
        <Link href="/news-page/[id]" as={`/news-page/${String(page + 1)}`}>
          <a>More</a>
        </Link>
      </footer>

    </div>
  )
}


export default Layout;