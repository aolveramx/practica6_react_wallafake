import { useReducer } from 'react'
import AdvertContext from './advertContext'
import advertReducer from './advertReducer'
import {
  ADD_ADVERT,
  DELETE_ADVERT,
  FILTER_ADVERTS,
  CLEAR_FILTER,
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
    filtered: null,
  }

  const [state, dispatch] = useReducer(advertReducer, initialState)

  //Add Advert
  const id = Math.floor(Math.random() * 1000) + 1

  const addAdvert = (advert) => {
    dispatch({
      type: ADD_ADVERT,
      payload: advert,
    })
  }

  //Delete Advert
  const deleteAdvert = (id) => {
    dispatch({
      type: DELETE_ADVERT,
      payload: id,
    })
  }

  //Filter Adverts
  const filterAdverts = (text) => {
    dispatch({
      type: FILTER_ADVERTS,
      payload: text,
    })
  }

  //Clear Filter
  const clearFilter = () => {
    dispatch({
      type: CLEAR_FILTER,
    })
  }

  return (
    <AdvertContext.Provider
      value={{
        adverts: state.adverts,
        filtered: state.filtered,
        addAdvert,
        deleteAdvert,
        filterAdverts,
        clearFilter,
      }}
    >
      {props.children}
    </AdvertContext.Provider>
  )
}

export default AdvertState
