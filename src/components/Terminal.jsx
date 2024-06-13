import { useState, useEffect } from 'react';
import styled from 'styled-components';

const TerminalContainer = styled.div`
  color: #c6f7d3;
  font-family: 'Courier New', Courier, monospace;
  padding: 16px;
  border: 2px solid #c6f7d3;
  border-radius: 8px;
  overflow-y: auto;
  height: calc(100vh - 64px);
  resize: vertical;
  max-width: 25rem;
  min-width:20rem; 
  max-height: 25rem;
  min-height: 10rem;


  /* Responsive styles for different screen sizes */
  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const CommandLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &::before {
    content: '$ ';
    color: #c6f7d3;
    font-weight: bold;
    margin-right: 8px;
  }
`;

const Input = styled.input`
  background-color: transparent;
  color: #c6f7d3;
  border: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  flex: 1;
  padding: 0;
  margin: 0;
  outline: none;
`;

const Output = styled.div`
  color: #c6f7d3;
  white-space: pre-wrap;
`;

const Terminal = () => {
  const [commands, setCommands] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');

  const handleInputChange = (event) => {
    setCurrentCommand(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // Add current command to the list
      setCommands([...commands, currentCommand]);

      // Execute the command (simulated in this example)
      const output = `Command executed: ${currentCommand}`;

      // Append output to the command history
      setCommands([...commands, output]);

      // Clear the input field
      setCurrentCommand('');
    }
  };

  // Example commands to display on initial render
  useEffect(() => {
    setCommands([

      'user@server:~$',
    ]);
  }, []);

  return (
    <TerminalContainer>
      <Output>
        {commands.map((command, index) => (
          <CommandLine key={index}>{command}</CommandLine>
        ))}
      </Output>
      <CommandLine>
        <Input
          type="text"
          value={currentCommand}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter command"
        />
      </CommandLine>
    </TerminalContainer>
  );
};

export default Terminal;