import styles from './headerComp.module.css';
  
  function HeaderComponent () {
  const headerItems = ['Y', 'Top', 'New'];
  return (
    <div className={styles.container}> 
      <ul className={styles.headerCompUL}>
        {headerItems.map(item => 
          <li className={styles.headerCompLI}>
            <a>{item}</a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default HeaderComponent;