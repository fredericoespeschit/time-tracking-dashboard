import './App.css';
import { AppProvider } from './components/AppContext';

import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <div className="container">
          <div className="content">
            <Sidebar />
            <Main />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;