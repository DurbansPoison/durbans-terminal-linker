import { ReactTerminal } from 'react-terminal';

import {materialDarkTheme}

function DurTerm(props) {

	const theme = {
			themeBGColor: "#151515",
			themeToolbarColor: "#424242",
			themeColor: "#fff",
			themePromptColor: "rgb(244,122,91)"
		};

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
				<strong>odysee</strong> - opens Durbans Odysee portfolio.<br></br>
				<strong>defcad</strong> - opens Durbans Defcad portfolio. <br></br>
				<strong>instagram</strong> - opens Durbans Instagram profile. <br></br>
				<strong>github</strong> - opens Durbans Github profile. <br></br>
			</span>
		),
	};


	const welcomeMessage = (
		<span>
			<span>
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
			theme={theme}
			defaultHandler={(command, commandArguments) => {
				return `${command} passed on to default handler with arguments ${commandArguments}`;
			}}
		/>
	);
}

export default DurTerm;