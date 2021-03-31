import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';
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

  //Delete Advert
  const deleteAdvert = (id) => {
    setAdverts(adverts.filter((advert) => advert.id !== id))
  }

  return (
    <Router>
    <div className="App">
      <Header />
      {/* <LoginPage /> */}
      {adverts.length > 0 ? (
      <AdvertsPage adverts={adverts} onDelete={deleteAdvert}/>
      ) : (
        'No hay anuncios publicados, vuelve mas tarde o publica uno 🙄'
      )}
      {/* <NewAdvert /> */}
      {/* <NotFound404 /> */}
      {/* <AdvertDetail /> */}
      {/* <RegisterPage /> */}
      <Footer />
    </div>
    </Router>
  )
}

export default App;
