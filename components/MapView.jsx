import Map, { Marker } from 'react-map-gl'
import { useState } from 'react'
import { getCenter } from 'geolib'

function MapView({ searchResult }) {
  // transform search result into latitude / longitude object
  const coordinates = searchResult.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }))

  // center throught all around appartment
  const center = getCenter(coordinates)

  const [viewState, setViewState] = useState({
    width: '100%',
    height: '100%',
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 12
  })

  console.log(coordinates)

  return (
    <Map
      mapStyle='mapbox://styles/g-goz/ckzldufhw003t15segy418qou'
      mapboxAccessToken={process.env.mapbox_key}
      {...viewState}
      onMove={e => setViewState(e.viewState)}
    >
      {searchResult.map(result => (
        <Marker
          key={result.long}
          longitude={result.long}
          latitude={result.lat}
        >
          <p className='cursor-pointer text-2xl'>😱</p>
        </Marker>
      ))}
    </Map>
  )
}

export default MapView
