import './App.css';
import { MainLayout } from './layouts';
import { PRODIBI_ACCOUNT } from './constants';
import { useScriptSimple } from './hooks';

function App() {

  useScriptSimple('./prodibi.embed.2.0.min.js')

  // Not sure why this is needed but its included in embed
  window.prodibiAsync = window.prodibiAsync || [];
  window.prodibiAsync.push({ type: 'settings', settings: { account: PRODIBI_ACCOUNT } });

  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
