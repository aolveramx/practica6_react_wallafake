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
        id: 1,
        name: 'Sony PlayStation 5',
        sale: true,
        price: 900,
        tags: 'lifestyle',

      },
      {
        id: 2,
        name: 'Apple iPhone 12 Pro Max',
        sale: false,
        price: 1319,
        tags: 'work',

      },
      {
        id: 3,
        name: 'Google Pixel 4a',
        sale: true,
        price: 999,
        tags: 'mobile',

      },
      {
        id: 4,
        name: 'Ford Mustang 1966 Convertible',
        sale: false,
        price: 105000,
        tags: 'motor',

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
  const deleteAdvert = (id) => {
    dispatch({
      type: DELETE_ADVERT,
      payload: id
    })
  }

  //Filter Adverts

  //Clear Filter

  return (
    <AdvertContext.Provider
      value={{
        adverts: state.adverts,
        addAdvert,
        deleteAdvert
      }}
    >
      {props.children}
    </AdvertContext.Provider>
  )
}

export default AdvertState
