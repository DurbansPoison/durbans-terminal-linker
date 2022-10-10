import { ReactTerminal } from "react-terminal";

function App(props) {
  // Define commands here
  const commands = {
    whoami: "jackharper",
    cd: (directory) => `changed path to ${directory}`
  };

  return (
    <ReactTerminal
      commands={commands}
    />
  );
}
