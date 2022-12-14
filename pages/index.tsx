import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'/*  */
import HomePage from './home'


const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Typescript Demo - shopping cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <HomePage/>
      </div>
    </div>
  )
}



export default Home


