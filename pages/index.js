import Head from 'next/head'
import Featured from '../component/Featured'
import PizzaList from '../component/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza App in Lagos</title>
        <meta name="description" content="Best pizza shop in lagos city" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  )
}
