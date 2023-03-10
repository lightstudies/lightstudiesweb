import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

function App() {
  return (
    <div className="App  text-white dark:bg-primary">
      <BrowserRouter basename="/lightstudiesweb/">
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
