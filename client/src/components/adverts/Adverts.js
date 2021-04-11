import { Fragment, useContext, useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Spinner from '../layout/Spinner'
import AdvertItem from './AdvertItem'
import AdvertContext from '../../context/advert/advertContext'

const Adverts = () => {
  const advertContext = useContext(AdvertContext)

  const { adverts, filtered, getAdverts, loading } = advertContext

  useEffect(() => {
    getAdverts()
    //eslint-disable-next-line
  }, [])

  if (adverts !== null && adverts.length === 0 && !loading) {
    return <h4>No hay anuncios publicados, vuelve mas tarde o publica uno 🙄</h4>
  }

  return (
    <Fragment>
      {adverts !== null && !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((advert) => (
                <CSSTransition key={advert._id} timeout={500} classNames='item'>
                  <AdvertItem advert={advert} />
                </CSSTransition>
              ))
            : adverts.map((advert) => (
                <CSSTransition key={advert._id} timeout={500} classNames='item'>
                  <AdvertItem advert={advert} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  )
}

export default Adverts
