import logo from './logo.svg';
import './App.css';
import { Banner } from './components/Banner';
import { Button } from 'react-bootstrap';
import { Background } from './components/Background';

function App() {
  return (
    <div className="App">
      <Background />
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
    </div>
  );
}

export default App;
