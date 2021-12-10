import styles from './Footer.module.css';

const Footer = () => {
  const date = new Date();
  const yyyy = date.getFullYear();
  return (
    <>
      <footer className={styles.footer}>
        <p> &copy; {yyyy} - Adrián Curiel</p>
      </footer>
    </>
  )
}

export default Footer
