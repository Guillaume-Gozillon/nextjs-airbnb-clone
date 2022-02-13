import { useRouter } from 'next/router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns'
import { capitalizeFirstLetter } from '../utils/utils'
import InfoCard from '../components/InfoCard'

function Search({ searchResult }) {
  const router = useRouter()
  const { location, startDate, endDate, nbOfGuest } = router.query

  const formattedStartDate = format(new Date(startDate), 'dd MMMM')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM')
  const range = `${formattedStartDate} au ${formattedEndDate}`

  const locationFormatted = capitalizeFirstLetter(location)

  return (
    <div>
      <Header
        placeholder={`${locationFormatted}, du ${range} pour ${nbOfGuest} voyageurs`}
      />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            {locationFormatted} : plus de 300 logements disponibles
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Découvrez la ville de {locationFormatted}
          </h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Annulation gratuite</p>
            <p className='button'>Type de logement</p>
            <p className='button'>Prix</p>
            <p className='button'>Wifi</p>
            <p className='button'>Cuisine</p>
            <p className='button'>Filtres</p>
          </div>

          <div className='flex flex-col'>
            {searchResult.map(
              (
                { img, location, title, description, star, price, total },
                i
              ) => (
                <InfoCard
                  key={i}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResult = await fetch('https://links.papareact.com/isz').then(
    res => res.json()
  )

  return {
    props: {
      searchResult
    }
  }
}
