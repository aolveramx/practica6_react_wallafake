import { Fragment, useContext } from 'react'
import AdvertItem from './AdvertItem'
import AdvertContext from '../../context/advert/advertContext'

const Adverts = () => {
  const advertContext = useContext(AdvertContext)

  const { adverts } = advertContext

  return (
    <Fragment>
      {adverts.map(advert => (
        <AdvertItem key={advert.id} advert={advert} />
      ))}
    </Fragment>
  )
}

export default Adverts
