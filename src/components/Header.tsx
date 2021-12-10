import styles from './Header.module.css';
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.logo}>WhatsApp<span className={styles.logoEspan}>e</span><span className={styles.logoSpan}>ando</span></h1>
      </header>
    </>
  )
}

export default Header
