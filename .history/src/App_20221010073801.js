import DurTerm from './components/DurTerm'
import './App.css';
import {TerminalContextProvider} from 'react-terminal'

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<TerminalContextProvider>
				<DurTerm />
				<TerminalContextProvider/>
      </header>
			<main>
				<div>
					<p>Sanity</p>
				</div>
			</main>
    </div>
  );
}

export default App;
