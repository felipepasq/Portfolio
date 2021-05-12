import Head from 'next/head';
import { About } from '../components/About'
import { Intro } from '../components/Intro'

export default function Home() {
  return (

    <div>

      <Head>
        <title>Portfolio</title>
      </Head>
      <Intro />
      <About />
      <section>

      </section>

    </div>
  )
}
