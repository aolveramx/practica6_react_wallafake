import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import AdvertsPage from './components/AdvertsPage';
import NewAdvert from './components/NewAdvert';
import AdvertDetail from './components/AdvertDetail';
import NotFound404 from './components/NotFound404';

const App = () => {
  const [adverts, setAdverts] = useState([
    {
      name: 'Sony PlayStation 5',
      sale: true,
      price: 900,
      tags: 'electronics',
      userId: 1,
      id: 1
    },
    {
      name: "Apple iPhone 12 Pro Max",
      sale: false,
      price: 1319,
      tags: 'electronics',
      userId: 1,
      id: 2
    },
    {
      name: 'New England Patriots NFL Jersey M',
      sale: true,
      price: 31,
      tags: 'clothes',
      userId: 1,
      id: 3
    }
  ])

  //New Advert
  const newAdvert = (advert) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newAdvert = { id, ...advert }
    setAdverts([...adverts, newAdvert])
  }

  //Delete Advert
  const deleteAdvert = (id) => {
    setAdverts(adverts.filter((advert) => advert.id !== id))
  }

  //Advert Detail
  const advertDetail = (id) => {
    setAdverts(adverts.find((advert) => advert.id === id)
    
    
    )
    
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
      <Route path='/advert/new' component={NewAdvert} />
      {/* <Route path='/advert/:id' component={AdvertDetail} /> */}
      <Route path='/404' component={NotFound404} />
      <Footer />
    </div>
    </Router>
  )
}

export default App;
