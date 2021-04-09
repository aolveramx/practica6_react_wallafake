import { useReducer } from 'react'
import axios from 'axios'
import AdvertContext from './advertContext'
import advertReducer from './advertReducer'
import {
  ADD_ADVERT,
  ADVERT_ERROR,
  DELETE_ADVERT,
  FILTER_ADVERTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types'

const AdvertState = (props) => {
  const initialState = {
    adverts: [],
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(advertReducer, initialState)

  //Add Advert
  const addAdvert = async (advert) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await axios.post('/api/adverts', advert, config)

      dispatch({
        type: ADD_ADVERT,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: ADVERT_ERROR,
        payload: error.response.message,
      })
    }


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
        error: state.error,
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
