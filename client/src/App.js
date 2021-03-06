import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/pages/Main'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Alerts from './components/layout/Alerts'
import PrivateRoute from './components/routing/PrivateRoute'
import NotFound from './components/pages/NotFound'

import AdvertState from './context/advert/AdvertState'
import AuthState from './context/auth/AuthState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken'
import './App.css'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <AdvertState>
        <AlertState>
          <Router>
            <Fragment>
              <Header />
              <Container>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Main} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route path='*'>
                    <NotFound />
                  </Route>
                </Switch>
              </Container>
              <Footer />
            </Fragment>
          </Router>
        </AlertState>
      </AdvertState>
    </AuthState>
  )
}

export default App
