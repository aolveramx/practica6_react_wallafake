import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import AdvertsPage from './components/AdvertsPage';
import NewAdvert from './components/NewAdvert';
import AdvertDetail from './components/AdvertDetail';
import NotFound404 from './components/NotFound404';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      {/* <LoginPage /> */}
      {/* <AdvertsPage /> */}
      {/* <NewAdvert /> */}
      {/* <NotFound404 /> */}
      {/* <AdvertDetail /> */}
      <RegisterPage />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
