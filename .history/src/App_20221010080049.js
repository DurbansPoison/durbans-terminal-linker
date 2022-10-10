import DurTerm from './components/DurTerm/DurTerm.js'
import './App.css'
import {TerminalContextProvider} from 'react-terminal'
import Logo from './logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
				<div className="logoContainer">
					<Logo />
				</div>
				<div className="termContainer">
				<TerminalContextProvider>
				<DurTerm />
				</TerminalContextProvider>
				</div>
      </header>
			<main>
				<div>
					<p>SanityCheck</p>
				</div>
			</main>
    </div>
  );
}

export default App;
