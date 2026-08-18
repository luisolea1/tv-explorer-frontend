import { Route, Routes } from 'react-router-dom';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import SeriesPage from '../SeriesPage/SeriesPage.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/series" element={<SeriesPage />} />
      </Routes>
    </div>
  );
}

export default App;