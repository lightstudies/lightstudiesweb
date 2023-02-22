import './App.css';
import { MainLayout } from './layouts';
import { PRODIBI_ACCOUNT } from './constants';
import { useScript } from './hooks';

function App() {
  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
