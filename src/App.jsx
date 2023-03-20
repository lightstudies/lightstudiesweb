import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './Routes';
import { PRODIBI_ACCOUNT } from './constants';

function App() {
  // Initialize prodibi
  window.prodibiAsync = window.prodibiAsync || [];
  window.prodibiAsync.push({ type: 'settings', settings: { account: PRODIBI_ACCOUNT } });

  return (
    <BrowserRouter basename="/lightstudiesweb/">
      <Routes />
    </BrowserRouter>
  );
}

export default App;
