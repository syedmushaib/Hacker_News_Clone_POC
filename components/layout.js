import Link from 'next/link';
// import styles from './layout.module.css';
import HeaderSection from './header-section';
import HeaderComponent from './header-comp';
// import utilStyles from '../styles/utils.module.css';


const name = 'Syed Mushaib Khalid';
export const siteTitle = 'Next.js Sample Website';

function Layout({ children, home }) {
  return (
    <div >
      {/* meta tags and other html head supported tag are included inside "HeaderSection" */}
      <HeaderSection/>
  
      <header>
        <HeaderComponent/>
      </header>

      <main>{children}</main>

      <footer>More</footer>
    </div>
  )
}


export default Layout;