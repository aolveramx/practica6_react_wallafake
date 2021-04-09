import {
  ADD_ADVERT,
  ADVERT_ERROR,
  DELETE_ADVERT,
  FILTER_ADVERTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types'

//eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_ADVERT:
      return {
        ...state,
        adverts: [...state.adverts, action.payload],
      }
    case DELETE_ADVERT:
      return {
        ...state,
        adverts: state.adverts.filter((advert) => advert.id !== action.payload),
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
        error: action.payload
      }
    default:
      return state
  }
}
