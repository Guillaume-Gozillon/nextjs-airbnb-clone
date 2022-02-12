import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({ data, cardsData }) {
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
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {data?.map((item, i) => (
              <SmallCard
                key={i}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='text-4xl font-semibold py-8'>Leave anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map((item, i) => (
              <MediumCard key={i} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
        <LargeCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoor'
          description='Wishlist Curated by Aribnb'
          buttonText='Get inspired'
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch('https://links.papareact.com/pyp').then(res =>
    res.json()
  )

  const cardsData = await fetch('https://links.papareact.com/zp1').then(res =>
    res.json()
  )
  return {
    props: {
      data,
      cardsData
    }
  }
}
