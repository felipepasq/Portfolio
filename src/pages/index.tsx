import Head from 'next/head';
import { About } from '../components/About'
import { Intro } from '../components/Intro'
import { Header } from '../components/Header'
import { Timeline } from '../components/Timeline';

export default function Home() {
  return (

    <div>

      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <Intro />
      <About />
      <Timeline />
      <section>

      </section>

    </div>
  )
}
