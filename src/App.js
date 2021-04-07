import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/pages/Main'

import AdvertState from './context/advert/AdvertState'
import './App.css'

const App = () => {

  return (
    <AdvertState>
      <Router>
        <Fragment>
            <Header />
              <Container>
                <Switch>
                  <Route path='/' exact component={Main}/>
                </Switch>
              </Container>
            <Footer />
        </Fragment>
      </Router>
    </AdvertState>
  )
}

export default App