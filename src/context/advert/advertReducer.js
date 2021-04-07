import {
  ADD_ADVERT,
  DELETE_ADVERT,
  FILTER_ADVERT,
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
    default:
      return state
  }
}
