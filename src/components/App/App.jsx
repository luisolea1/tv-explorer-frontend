import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Main /> 

      <main className="app__content">
        <h1 className="app__title">TV Explorer</h1>
      </main>
    </div>
  );
}

export default App;