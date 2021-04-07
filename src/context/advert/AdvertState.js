import { useReducer } from 'react'
import AdvertContext from './advertContext'
import advertReducer from './advertReducer'
import {
  ADD_ADVERT,
  DELETE_ADVERT,
  FILTER_ADVERT,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types'

const AdvertState = (props) => {
  const initialState = {
    adverts: [
      {
        name: 'Sony PlayStation 5',
        sale: true,
        price: 900,
        tags: 'lifestyle',
        userId: 1,
        id: 1,
      },
      {
        name: 'Apple iPhone 12 Pro Max',
        sale: false,
        price: 1319,
        tags: 'work',
        userId: 1,
        id: 2,
      },
      {
        name: 'Google Pixel 4a',
        sale: true,
        price: 999,
        tags: 'mobile',
        userId: 1,
        id: 3,
      },
      {
        name: 'Ford Mustang 1966 Convertible',
        sale: false,
        price: 105000,
        tags: 'motor',
        userId: 1,
        id: 4,
      },
    ],
  }

  const [state, dispatch] = useReducer(advertReducer, initialState)

  //Add Advert
  const id = Math.floor(Math.random() * 1000) + 1

  const addAdvert = (advert) => {
    dispatch({
      type: ADD_ADVERT,
      payload: advert
    })
  }

  //Delete Advert

  //Filter Adverts

  //Clear Filter

  return (
    <AdvertContext.Provider
      value={{
        adverts: state.adverts,
        addAdvert
      }}
    >
      {props.children}
    </AdvertContext.Provider>
  )
}

export default AdvertState
