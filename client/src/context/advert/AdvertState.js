import { useReducer } from 'react'
import axios from 'axios'
import AdvertContext from './advertContext'
import advertReducer from './advertReducer'
import {
  GET_ADVERTS,
  ADD_ADVERT,
  ADVERT_ERROR,
  DELETE_ADVERT,
  UPDATE_ADVERT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_ADVERTS,
  CLEAR_ADVERTS,
  CLEAR_FILTER
} from '../types'

const AdvertState = (props) => {
  const initialState = {
    current:  null,
    adverts: null,
    filtered: null,
    error: null,
  }

  const [state, dispatch] = useReducer(advertReducer, initialState)

  //Get Adverts
  const getAdverts = async () => {
    try {
      const response = await axios.get('/api/adverts')

      dispatch({
        type: GET_ADVERTS,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: ADVERT_ERROR,
        payload: error.response.message,
      })
    }
  }

  //Add Advert
  const addAdvert = async (advert) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
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
        payload: error.response.message 
      })
    }
  }

  //Delete Advert
  const deleteAdvert = async (id) => {
    try {
      await axios.delete(`/api/adverts/${id}`)

      dispatch({ 
        type: 
        DELETE_ADVERT, 
        payload: id 
      })
    } catch (error) {
      dispatch({ 
        type: ADVERT_ERROR, 
        payload: error.response.message 
      })
    }
  }

  //Update Advert
  const updateAdvert = (advert) => {
    dispatch({ type: UPDATE_ADVERT, payload: advert })
  }

  //Set Current Advert
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }

  //Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  //Clear Adverts
  const clearAdverts = () => {
    dispatch({
      type: CLEAR_ADVERTS,
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
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addAdvert,
        deleteAdvert,
        setCurrent,
        clearCurrent,
        updateAdvert,
        filterAdverts,
        clearFilter,
        getAdverts,
        clearAdverts,
      }}
    >
      {props.children}
    </AdvertContext.Provider>
  )
}

export default AdvertState
