import { ReactTerminal } from "react-terminal";




function DurTerm(props) {
  // Define commands here
  const commands = {
    whoami: "DurbanPoison",
    odysee: 

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
