import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Copyright } from './components/Copyright/Copyright.jsx';
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound.jsx";

import { Header } from './components/Header/Header.jsx';
import { Footer } from './components/Footer/Footer.jsx';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <section className="app-container">
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={< HomePage />} />
            <Route path="*" element={< PageNotFound />} />
          </Routes>
          {/* <Footer /> */}
          {/* <Copyright /> */}
      </section>
    </BrowserRouter>
  );
}

export default App;
