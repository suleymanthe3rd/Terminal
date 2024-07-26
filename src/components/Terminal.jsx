import { useState,useContext } from 'react';
import styled from 'styled-components';
import Matrix from '../components/MatrixRain';
import { UniversalContext } from '../context/UniversalContext';


const Terminal = () => {
  const { getValue } = useContext(UniversalContext);
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Tab 1', commands: [] },
    { id: 2, title: 'Tab 2', commands: [] },
    { id: 3, title: 'Tab 3', commands: [] },
    { id: 4, title: 'Tab 4', commands: [] },
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
      const newCommands = [...currentTabCommands, `$ ${currentCommand}`]; // add $ sign to the command
      setTabs(
        tabs.map((tab) => {
          if (tab.id === currentTab) {
            return { ...tab, commands: newCommands };
          }
          return tab;
        })
      );

      // Clear the input field
      setCurrentCommand('');
    }
  };

  return (
    <TerminalContainer
    style={{ color: getValue('primary'), borderColor:getValue('primary')}}
    >
      <TabContainer>
        {tabs.map((tab) => (
          <Tab
          primarycolor={getValue('primary')}
          style={{borderColor:getValue('primary')}}
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            isselected={tab.id === currentTab ? 'selected' : ''}
          >
            <TabTextWrapper>
              <span>{tab.title}</span>
            </TabTextWrapper>
          </Tab>
        ))}
      </TabContainer>
      <TabContent 
      primarycolor={getValue('primary')}
      style={{  overflowY: currentTab === 1 ? 'hidden' : 'auto', height: '100%' }}>
  {currentTab === 1 ? (
    <Matrix />
  ) : (
    <Output
    primarycolor={getValue('primary')}
    >
      {tabs.find((tab) => tab.id === currentTab).commands.map((command, index) => (
        <CommandLine key={index}>
          <span>{command}</span>
        </CommandLine>
      ))}
      <CommandLine>
        {tabs.find((tab) => tab.id === currentTab).commands.length > 0 && (
          <span>$</span>
        )}
        <Input
          primarycolor={getValue('primary')}
          value={currentCommand}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="$: "
          rows={1} /* initial number of rows, will auto-grow */
        />
      </CommandLine>
    </Output>
  )}
</TabContent>
    </TerminalContainer>
  );
};

//styles
const TerminalContainer = styled.div`
  font-family: 'Courier New', Courier, monospace;
  border-radius: 0; 
  overflow-x: hidden;
  overflow-y:none;
  height:31rem;
  width: 30rem;
  border-left: 1px solid ;
  border-bottom: 1px solid ;
  margin-bottom: 1rem;
  scrollbar-width: none;



  /* Responsive styles for different screen sizes */
  @media (max-width: 768px) {
    font-size: 12px;
    width: 25rem;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    width: 25rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  left: -0.3rem;
  padding-right:1rem;
  overflow-y:none;
  
`;

const Tab = styled.div`
  cursor: pointer;
  width: 100%;
  font-size: 0.7rem;
  font-weight: bold;
  text-align: center;
  position: relative;
  border: 1px solid;
  transform: skewX(30deg);
  padding: 0.01rem 2rem;

  ${({ isselected, primarycolor }) =>
    isselected === 'selected' &&
    `
      background-color: ${primarycolor};
      color: black;
    `}
`;

const TabTextWrapper = styled.span`
  transform: skewX(-30deg);
  display: inline-block;
`;

const TabContent = styled.div`
overflow-y: auto;
  padding: 16px;
  height: 100%;
  border-right: 1px solid ${(props)=>props.primarycolor};
  /* Customize scrollbar design */
  &::-webkit-scrollbar {
    
    width: 8px; /* width of the scrollbar */
    height: 8px; /* height of the scrollbar */
    background-color: transparent; /* background color of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    
    background-color: ${(props)=>props.primarycolor}; /* color of the scrollbar thumb */
    border-radius: 1px; /* rounded corners of the scrollbar thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #aaa; /* hover color of the scrollbar thumb */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* background color of the scrollbar track */
  }
`;

const CommandLine = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.textarea`
  background-color: transparent;
  color: ${(props)=>props.primarycolor};
  border: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  flex: 1;
  padding: 0;
  margin: 0;
  outline: none;
  resize:none;
  scrollbar-width: none;

   &::placeholder {
    color: ${(props) => props.primarycolor};
  }
`;

const Output = styled.div`
  color: ${(props)=>props.primarycolor};
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
`;

export default Terminal;