import './App.css';
import React from 'react';
import Navbar from './components/NavBar';
import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Navbar />
        </p>
      </header>
    </div>
  );
}

export default App;
