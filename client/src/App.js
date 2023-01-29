import "./App.css";

import { useApi } from "./hooks/use-api";

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {response}
          Test
        </p>
      </header>
    </div>
  );
}

export default App;
