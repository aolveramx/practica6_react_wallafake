import { Fragment, useContext } from 'react'
import AdvertItem from './AdvertItem'
import AdvertContext from '../../context/advert/advertContext'

const Adverts = () => {
  const advertContext = useContext(AdvertContext)

  const { adverts, filtered } = advertContext

  if (adverts.lenght === 0) {
    return (
      <h4>No hay anuncios publicados, vuelve mas tarde o publica uno 🙄</h4>
    )
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((advert) => (
            <AdvertItem key={advert.id} advert={advert} />
          ))
        : adverts.map((advert) => (
            <AdvertItem key={advert.id} advert={advert} />
          ))}
    </Fragment>
  )
}

export default Adverts
