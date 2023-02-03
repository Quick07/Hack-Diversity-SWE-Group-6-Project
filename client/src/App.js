import "./App.css";
import Title from "./components/Title";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import { useApi } from "./hooks/use-api";

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <Navbar />
      <Title />
      <Main />

      <header className="App-header">
        <p>{response}</p>
      </header>
    </div>
  );
}

export default App;
