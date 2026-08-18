import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import NotFoundPage from '../NotFoundPage/NotFoundPage.jsx';
import SeriesPage from '../SeriesPage/SeriesPage.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;