import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb cloned</title>
        <meta
          name='description'
          content='Airbnb cloned by Guillaume Gozillon'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>
            Des idées pour votre prochain voyage
          </h2>

        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  
}