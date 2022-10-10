import { ReactTerminal } from "react-terminal";




function DurTerm(props) {
  // Define commands here
  const commands = {
    whoami: "DurbanPoison",
    odysee:  () => window.open('https://www.odysee.com/durbanpoisonpew', '_blank'),
	defcad: () => window.open('https://www.defcad.com/durbanpoisonpew', '_blank'),
	instagram: () => window.open('https://instagram.com/durbanpoisonpew', '_blank'),
	github: () => window.open('https://github.com/durbanpoisonpew', '_blank'),
	help: (
		<span>

			<strong>odysee</strong> - opens Durbans Odysee portfolio </br>
			<strong>defcad</strong> - opens Durbans Defcad portfolio. </br>
		</span>

	)
  };
  const welcomeMessage = (
    <span>
      Type "help" for all available commands. <br />
    </span>
  );

  return (
    <ReactTerminal
      commands={commands}
	  welcomeMessage={welcomeMessage}
	  defaultHandler={(command, commandArguments) => {
		return `${command} passed on to default handler with arguments ${commandArguments}`;
	  }}
    />
  );
}


export default DurTerm;
