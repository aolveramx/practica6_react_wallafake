import { Fragment, useContext } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((advert) => (
            <CSSTransition key={advert.id} timeout={500} classNames='item'>
              <AdvertItem advert={advert} />
            </CSSTransition>
            ))
          : adverts.map((advert) => (
            <CSSTransition key={advert.id} timeout={500} classNames='item'>
              <AdvertItem advert={advert} />
            </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  )
}

export default Adverts
