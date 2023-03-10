import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import { PRODIBI_ACCOUNT } from './constants';

function App() {

  // Initialize prodibi
  window.prodibiAsync = window.prodibiAsync || [];
  window.prodibiAsync.push({ type: 'settings', settings: { account: PRODIBI_ACCOUNT } });
  
  return (
    <div className="App  text-white dark:bg-primary">
      <BrowserRouter basename="/lightstudiesweb/">
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
