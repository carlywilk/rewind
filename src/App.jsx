import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound.jsx";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="*" element={< PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
