import DurTerm from './components/DurTerm'
import './App.css';
import {TerminalContextProvider} from 'react-terminal'

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<TerminalContextProvider>
				<DurTerm />
				<TerminalconTerminalContextProvider/>
      </header>
    </div>
  );
}

export default App;
