import Head from 'next/head';
import styles from '../styles/Home.module.css'
import Layout from './layout';
import Link from 'next/link'

const About =() =>(
    <div className={styles.container}>
         <Layout/>
        <Head>
            <title>About</title>
        </Head>
        <h1 className={styles.title}>About</h1>
        <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">BitzPrices!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
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

          
        </div>
      </main>
    </div>

);

export default About;