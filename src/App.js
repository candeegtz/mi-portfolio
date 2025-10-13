import './App.css';
import { Banner } from './components/Banner';
import { Background } from './components/Background';
import NavBar from './components/NavBar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ContactPage from './contact/ContactPage';
import UniProyects from './uni-proyects/UniProyects';
import MarioLevelPage from './personal-proyects/MarioLevelPage';
import PersonalProyects from './personal-proyects/PersonalProyects';
import SkullKingPage from './uni-proyects/SkullKingPage';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Background />
        <NavBar/>
        <Routes>
          <Route path="/" element={
            <header className="App-header">
              <Banner/>
              <a
                className="App-link"
                href="https://github.com/candeegtz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github: candeegtz
              </a>
            </header>
          } /> 
          <Route path="/contact" element={<ContactPage/>} /> 
          <Route path="/university-proyects" element={<UniProyects/>} />
          <Route path="/university-proyects/Skull-King" element={<SkullKingPage/>} />
          <Route path="/personal-proyects" element={<MarioLevelPage/>} />

          <Route path="*" element={<h1>404 Página no Encontrada</h1>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
