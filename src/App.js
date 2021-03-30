import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AdvertsPage from './components/AdvertsPage';
import NewAdvert from './components/NewAdvert';
import NotFound404 from './components/NotFound404';
import AdvertDetail from './components/AdvertDetail';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      {/* <LoginPage /> */}
      {/* <AdvertsPage /> */}
      {/* <NewAdvert /> */}
      {/* <NotFound404 /> */}
      <AdvertDetail />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
