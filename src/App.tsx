import styles from './App.module.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';



function App() {



  return (
    <div className={styles.App}>
      <Header />
      <section className={styles.section}>
        <Form />
      </section>
      <Footer />
    </div>
  );
}

export default App;

