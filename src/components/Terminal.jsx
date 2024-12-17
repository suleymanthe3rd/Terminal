import { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Matrix from '../components/MatrixRain';
import { UniversalContext } from '../context/UniversalContext';

const Terminal = () => {
  const { getValue } = useContext(UniversalContext);
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Tab 1', commands: [], currentCommand: '' },
    { id: 2, title: 'Tab 2', commands: [], currentCommand: '' },
    { id: 3, title: 'Tab 3', commands: [], currentCommand: '' },
    { id: 4, title: 'Tab 4', commands: [], currentCommand: '' },
  ]);
  const [currentTab, setCurrentTab] = useState(1);
  const inputRef = useRef(null);

  const handleTabChange = (tabId) => {
    setCurrentTab(tabId);
  };

  const handleInputChange = (event) => {
    const updatedTabs = tabs.map((tab) =>
      tab.id === currentTab
        ? { ...tab, currentCommand: event.target.value }
        : tab
    );
    setTabs(updatedTabs);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const updatedTabs = tabs.map((tab) =>
        tab.id === currentTab
          ? {
              ...tab,
              commands: [...tab.commands, `$ ${tab.currentCommand}`],
              currentCommand: '',
            }
          : tab
      );
      setTabs(updatedTabs);
    }
  };

  // UseEffect to update input value from context
  useEffect(() => {
    const handleKeyPressed = () => {
      if (inputRef.current) {
        const pressedKey = getValue('keypressed');
        const specialKeys = ['SHIFT', 'ESC', 'TAB', 'ENTER', 'CAPS', 'CTRL', 'FN', 'SPACE', 'ALT GR'];
        if (!specialKeys.includes(pressedKey)) {
          setTabs(
            tabs.map((tab) =>
              tab.id === currentTab
                ? { ...tab, currentCommand: tab.currentCommand + pressedKey }
                : tab
            )
          );
        } else {
          if (pressedKey === 'ENTER') {
            handleKeyDown({ key: 'Enter' });
          } else if (pressedKey === 'SPACE') {
            setTabs(
              tabs.map((tab) =>
                tab.id === currentTab
                  ? { ...tab, currentCommand: tab.currentCommand + ' ' }
                  : tab
              )
            );
          }
        }
      }
    };
  
    handleKeyPressed();
  }, [getValue('keypressed')]);

  return (
    <TerminalContainer
      style={{ color: getValue('primary'), borderColor: getValue('primary') }}
    >
      <TabContainer>
        {tabs.map((tab) => (
          <Tab
            primarycolor={getValue('primary')}
            style={{ borderColor: getValue('primary') }}
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
      <ContentWrapper>
        <TabContent
          primarycolor={getValue('primary')}
          style={{
            overflowY: currentTab === 1 ? 'hidden' : 'auto',
            height: '100%',
          }}
        >
          {currentTab === 1 ? (
            <Matrix />
          ) : (
            <Output primarycolor={getValue('primary')}>
              {tabs
                .find((tab) => tab.id === currentTab)
                .commands.map((command, index) => (
                  <CommandLine key={index}>
                    <span>{command}</span>
                  </CommandLine>
                ))}
              <CommandLine>
                <InputWrapper>
                  <DollarSign>$</DollarSign>
                  <Input
                    primarycolor={getValue('primary')}
                    value={tabs.find((tab) => tab.id === currentTab).currentCommand} // Access currentCommand from the correct tab
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder=" Enter your command"
                    rows={1}
                    ref={inputRef} // Add ref to the input
                  />
                </InputWrapper>
              </CommandLine>
            </Output>
          )}
        </TabContent>
      </ContentWrapper>
    </TerminalContainer>
  );
};


const TerminalContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: 'Courier New', Courier, monospace;
  border-left: 1px solid;
  border-radius: 0;
  overflow-x: hidden;
  overflow-y: none;
  height: 31rem;
  width: 30rem;
  margin-bottom: 1rem;
  scrollbar-width: none;

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
  position: static;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin-left: -0.3rem;
  padding-right: 1rem;
  overflow-y: none;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  border-right: 1px solid ${(props) => props.primarycolor};
  border-bottom: 1px solid;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.primarycolor};
    border-radius: 1px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
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
  height: 100%;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.primarycolor};
    border-radius: 1px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const CommandLine = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom:5px;
  padding-top:5px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const DollarSign = styled.span`
  color: ${(props) => props.primarycolor};
  margin-right: 5px;
`;

const Input = styled.textarea`
  background-color: transparent;
  color: ${(props) => props.primarycolor};
  border: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 16px;
  flex: 1;
  padding: 0;
  margin: 0;
  outline: none;
  resize: none;
  scrollbar-width: none;

  &::placeholder {
    color: ${(props) => props.primarycolor};
  }
`;

const Output = styled.div`
  color: ${(props) => props.primarycolor};
  white-space: normal;
  word-break: break-word;
  overflow-wrap: break-word;
`;

export default Terminal;