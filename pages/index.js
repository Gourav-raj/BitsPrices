import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from './layout'
import Fetch from 'isomorphic-unfetch'
import Prices from './prices'
const Home=(props)=> (
    <div className={styles.container}>
      <Layout/>
      <Head>
        <title>BitzPrices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">BitzPrices!</a>
        </h1>

        <p className={styles.description}>
          Get started with stock marketing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}><h3>About &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a></Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <Prices bpi={props.bpi.bpi}/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  
  );
  Home.getInitialProps=async function(){
    const res=await fetch
    ('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data =await res.json();
    return {
      
      bpi:data
    }
  }
  
export default Home;
