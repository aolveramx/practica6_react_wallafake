import { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types'

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('accessToken'),
    isAuthenticated: null,
    user: null,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)


  //Register User
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await axios.post('http://localhost:3001/api/auth/signup', formData, config)

      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data
      })
      // loadUser()
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.body
      })
    }
  } 

  //Login User

  //Logout User

  //Clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
