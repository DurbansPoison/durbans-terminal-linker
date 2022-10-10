import { ReactTerminal } from "react-terminal";

const welcomeMessage = (
    <span>
      Type "help" for all available commands. <br />
    </span>
  );



function DurTerm(props) {
  // Define commands here
  const commands = {
    whoami: "DurbanPoison",
    cd: (directory) => `changed path to ${directory}`
  };

  return (
    <ReactTerminal
      commands={commands}
	  welcomeMessage={welcomeMessage}
    />
  );
}


export default DurTerm;
