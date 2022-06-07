import SildeFind from '@/components/SlideFind';
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quandoo Restaurant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SildeFind />
    </div>
  );
}

export default Home
