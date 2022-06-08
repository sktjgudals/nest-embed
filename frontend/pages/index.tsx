import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import UrlBox from './UrlBox'

import {  useState } from "react";
import { Data } from '../types/interface'
import YouTube from '../components/Youtube';
import Twitter from '../components/Twitter';
import Vimeo from '../components/Vimeo';


export default function Home() {
  const [provider, setProvider] = useState<string>("");
  const [data, setData] = useState<Data>();

  return (
    <div className={styles.container}>
      <Head>
        <title>oEmbed Test</title>
      </Head>
      <div className={styles.title}>
        <Link href={"/"}><a >oEmbed Test!</a></Link>
      </div>
      <div className={styles.box}><UrlBox setProvider={setProvider} setData={setData} /></div>
      <main className={styles.main}>
        {provider ==='YouTube' && <div>
          {data && <YouTube data={data} />}
        </div>}
        {provider === 'Twitter' && <div >
          {data && <Twitter data={data} />}
        </div>}
        {provider === 'Vimeo' && <div>
          {data && <Vimeo data={data} />}
        </div>}
      </main>
    </div>
  )
}
