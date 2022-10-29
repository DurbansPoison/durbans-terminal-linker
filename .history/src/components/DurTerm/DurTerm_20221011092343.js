import { ReactTerminal } from 'react-terminal';

function DurTerm(props) {


	// Define commands here
	const commands = {
		whoami: 'DurbanPoison',
		odysee: () =>
			window.open('https://odysee.com/@DurbanPoisonPew:9', '_blank'),
		defcad: () =>
			window.open('https://www.defcad.com/users/durbanpoisonpew/', '_blank'),
		instagram: () =>
			window.open('https://instagram.com/durbanpoisonpew', '_blank'),
		github: () => window.open('https://github.com/durbanpoisonpew', '_blank'),
		help: (
			<span>

				<strong><a href="https://odysee.com/@DurbanPoisonPew:9" target="_blank" rel="norefferer">odysee</a></strong> - opens Durbans Odysee portfolio.<br></br>
				<strong>defcad</strong> - opens Durbans Defcad portfolio. <br></br>
				<strong>instagram</strong> - opens Durbans Instagram profile. <br></br>
				<strong>github</strong> - opens Durbans Github profile. <br></br>
			</span>
		),
	};


	const welcomeMessage = (
		<span>
			<span>
			<h3>Type one of the following in the input bar to <br></br>
				 open the page you want to go to:<br></br></h3>
				<strong>odysee</strong> - opens Durbans Odysee portfolio.<br></br>
				<strong>defcad</strong> - opens Durbans Defcad portfolio. <br></br>
				<strong>instagram</strong> - opens Durbans Instagram profile. <br></br>
				<strong>github</strong> - opens Durbans Github profile. <br></br>
			</span>
			Type "help" for all available commands. <br />
		</span>
	);

	return (
		<ReactTerminal
			commands={commands}
			welcomeMessage={welcomeMessage}
			themes={{
				myTheme: {
				  themeBGColor: "rgb(112,112,112)",
				  themeToolbarColor: "rgb(74,74,74)",
				  themeToolbarMessage: "DurbanPoison",
				  themeColor: "rgb(255,255,255)",
				  themePromptColor: "rgb(244,122,91)"
				}
			  }}
			  theme="myTheme"
			defaultHandler={(command, commandArguments) => {
				return `${command} passed on to default handler with arguments ${commandArguments}`;
			}}
		/>
	);
}

export default DurTerm;
