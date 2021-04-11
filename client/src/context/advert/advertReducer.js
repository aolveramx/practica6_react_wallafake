import {
  GET_ADVERTS,
  ADD_ADVERT,
  ADVERT_ERROR,
  DELETE_ADVERT,
  FILTER_ADVERTS,
  CLEAR_ADVERTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types'

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_ADVERTS:
      return {
        ...state,
        adverts: action.payload,
        loading: false,
      }
    case ADD_ADVERT:
      return {
        ...state,
        adverts: [action.payload, ...state.adverts],
        loading: false,
      }
    case DELETE_ADVERT:
      return {
        ...state,
        adverts: state.adverts.filter((advert) => advert._id !== action.payload),
        loading: false,
      }
    case CLEAR_ADVERTS:
      return {
        ...state,
        adverts: null,
        filtered: null,
        error: null,
      }
    case FILTER_ADVERTS:
      return {
        ...state,
        filtered: state.adverts.filter((advert) => {
          const regex = new RegExp(`${action.payload}`, 'gi')
          return advert.name.match(regex) || advert.tags.match(regex)
        }),
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      }
    case ADVERT_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
