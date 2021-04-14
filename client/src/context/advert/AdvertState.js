import { useReducer } from 'react'
import axios from 'axios'
import AdvertContext from './advertContext'
import advertReducer from './advertReducer'
import {
  GET_ADVERTS,
  ADD_ADVERT,
  DELETE_ADVERT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ADVERT,
  FILTER_ADVERTS,
  CLEAR_ADVERTS,
  CLEAR_FILTER,
  ADVERT_ERROR,
} from '../types'

const AdvertState = (props) => {
  const initialState = {
    adverts: null,
    current: null,
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
        payload: error.response.message,
      })
    }
  }

  //Delete Advert
  const deleteAdvert = async (id) => {
    try {
      await axios.delete(`/api/adverts/${id}`)

      dispatch({
        type: DELETE_ADVERT,
        payload: id,
      })
    } catch (error) {
      dispatch({
        type: ADVERT_ERROR,
        payload: error.response.message,
      })
    }
  }

  //Update Advert
  const updateAdvert = async (advert) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    try {
      const response = await axios.put(
        `/api/adverts/${advert._id}`,
        advert,
        config
      )

      dispatch({
        type: UPDATE_ADVERT,
        payload: response.data,
      })
    } catch (error) {
      dispatch({
        type: ADVERT_ERROR,
        payload: error.response.message,
      })
    }
  }

  //Clear Adverts
  const clearAdverts = () => {
    dispatch({
      type: CLEAR_ADVERTS,
    })
  }

  //Set Current Advert
  const setCurrent = (advert) => {
    dispatch({ 
      type: SET_CURRENT, 
      payload: advert 
    })
  }

  //Clear Current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
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
