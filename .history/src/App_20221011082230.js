import DurTerm from './components/DurTerm/DurTerm.js'
import './App.css'
import {TerminalContextProvider} from 'react-terminal'

console.log('logo')

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<div className="logoContainer">

				</div>
				<div className="termContainer">
				<TerminalContextProvider>
				<DurTerm />
				</TerminalContextProvider>
				</div>
      </header>
			<main>
				<div></div>
				</div>
			</main>
    </div>
  );
}

export default App;
