import DurTerm from './components/DurTerm'
import './App.css';
import {TerminalContextProvider} from 'react-terminal'
import { TerminalContextProvider } from "react-terminal";
function App() {
  return (
    <div className="App">
      <header className="App-header">
				<TerminalconTerminalContextProvider>
				<DurTerm />
				<TerminalconTerminalContextProvider/>
      </header>
    </div>
  );
}

export default App;
