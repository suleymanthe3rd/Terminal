import { useState } from 'react';
import styled from 'styled-components';
import { primary } from '../utils/colors';
import Matrix from '../components/MatrixRain';

const TerminalContainer = styled.div`
  color: ${primary};
  font-family: 'Courier New', Courier, monospace;
  border: 2px solid ${primary}; /* keep the border */
  border-radius: 0; /* set corner radius to 0 */
  overflow-x: hidden;
  overflow-y: hidden;
  height: calc(100vh - 64px);
  resize: vertical;
  max-width: 25rem;
  min-width: 20rem; 
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

const TabContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  overflow:hidden;
  x-overflow:auto;
  width:110%;
  left:-1rem;
`;

const Tab = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: center;
  position: relative; /* add relative positioning */
  border-bottom: 1px solid ${primary};
  transform: skewX(30deg); /* add skew to create parallelogram shape */
  padding: 0.01rem 2rem; /* add padding to compensate for skew */
  border-right: 1px solid ${primary};
 

  ${({ isSelected }) =>
    isSelected &&
    `
      background-color: ${primary};
      color: black;
    `}
`;

const TabTextWrapper = styled.span`
  transform: skewX(-30deg);
  display: inline-block;
`;

const TabContent = styled.div`
  padding: 16px;
  overflow-y: auto;
  overflow-x: auto;
  height: 20rem;
`;

const CommandLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &::before {
    content: '$ ';
    color: ${primary};
    font-weight: bold;
    margin-right: 8px;
  }
`;

const Input = styled.input`
  background-color: transparent;
  color: ${primary};
  border: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  flex: 1;
  padding: 0;
  margin: 0;
  outline: none;
`;

const Output = styled.div`
  color: ${primary};
  white-space: pre-wrap;
`;

const Terminal = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Tab 1', commands: [] },
    { id: 2, title: 'Tab 2', commands: [] },
    { id: 3, title: 'Tab 3', commands: [] },
  ]);
  const [currentTab, setCurrentTab] = useState(1);
  const [currentCommand, setCurrentCommand] = useState('');

  const handleTabChange = (tabId) => {
    setCurrentTab(tabId);
  };

  const handleInputChange = (event) => {
    setCurrentCommand(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const currentTabCommands = tabs.find((tab) => tab.id === currentTab).commands;
      const newCommands = [...currentTabCommands, currentCommand];
      setTabs(
        tabs.map((tab) => {
          if (tab.id === currentTab) {
            return { ...tab, commands: newCommands };
          }
          return tab;
        })
      );

      // Execute the command (simulated in this example)
      const output = `Command executed: ${currentCommand}`;

      const newCommandsWithOutput = [...newCommands, output];
      setTabs(
        tabs.map((tab) => {
          if (tab.id === currentTab) {
            return { ...tab, commands: newCommandsWithOutput };
          }
          return tab;
        })
      );

      // Clear the input field
      setCurrentCommand('');
    }
  };

  return (
    <TerminalContainer>
      <TabContainer>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            isSelected={tab.id === currentTab}
          >
            <TabTextWrapper>
              <span>{tab.title}</span>
            </TabTextWrapper>
          </Tab>
        ))}
      </TabContainer>
      <TabContent style={{ overflow: 'hidden' }}>
        {currentTab === 1 ? (
          <Matrix />
        ) : (
          <Output>
            {tabs.find((tab) => tab.id === currentTab).commands.map((command, index) => (
              <CommandLine key={index}>{command}</CommandLine>
            ))}
            {currentTab !== 1 && (
              <CommandLine>
                <Input
                  type="text"
                  value={currentCommand}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter command"
                />
              </CommandLine>
            )}
          </Output>
        )}
      </TabContent>
    </TerminalContainer>
  );
};

export default Terminal;