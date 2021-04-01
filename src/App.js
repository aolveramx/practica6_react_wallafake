import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import AdvertsPage from './components/AdvertsPage'
import NewAdvert from './components/NewAdvert'
import AdvertDetail from './components/AdvertDetail'
import NotFound404 from './components/NotFound404'

const App = () => {
  const URL = 'http://localhost:3001/api/v1/adverts'
  const [adverts, setAdverts] = useState([])

  useEffect(() => {
    const getAdverts = async () => {
      const advertsFromServer = await fetchAdverts()
      setAdverts(advertsFromServer)
    }

    getAdverts()
  }, [])

  //Fetch Adverts
  const fetchAdverts = async () => {
    const response = await fetch(URL)
    const data = await response.json()

    return data
  }

    //Fetch Advert
    const fetchAdvert = async (id) => {
      const response = await fetch(`${URL}/${id}`)
      const data = await response.json()
  
      return data
    }


  //New Advert
  const newAdvert = async (advert) => {
    const response = await fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(advert) 
    })

    const data = await response.json()

    setAdverts([...adverts, data])
  }

  //Delete Advert
  const deleteAdvert = async (id) => {
    await fetch(`${URL}/${id}`, {
      method: 'DELETE'
    })
    setAdverts(adverts.filter((advert) => advert.id !== id))
  }

  //Advert Detail
  const advertDetail = (id) => {
    setAdverts(adverts.find((advert) => advert.id === id))
  } 

  return (
    <Router>
    <div className="App">
      <Header />

      <Route path='/' exact render={(props) => (
        <>
        {adverts.length > 0 ? (
          <AdvertsPage adverts={adverts} onDelete={deleteAdvert} onDetail={advertDetail}/>
          ) : (
            'No hay anuncios publicados, vuelve mas tarde o publica uno 🙄'
            )}
        </>
      )}
      />

      <Route path="/login" component={LoginPage} />

      <Route path="/signup" component={RegisterPage}/>

      <Route path='/adverts/new' component={newAdvert} />

      <Route path='/adverts/:id' component={AdvertDetail} />

      <Route path='/404' component={NotFound404} />

      <Footer />
    </div>
    </Router>
  )
}

export default App;
