import { useContext, useEffect } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import QwertyKeyboard from '../components/QwertyKeyboard';
import FolderComponent from '../components/FolderComponent';
import ChartComponent from '../components/ChartComponent';
import Terminal from '../components/Terminal';
import Watch from '../components/Watch';
import NetworkStatus from '../components/NetworkStatus';
import SystemType from '../components/SystemType';
import CpuStatus from '../components/CpuStatus';
import TopProcess from '../components/TopProcess';
import ClipboardAccess from '../components/ClipboardAccess';
import MemoryStatus from '../components/MemoryStatus';
import Earth from '../components/Earth';
import Settings from '../components/Settings';
import { UniversalContext } from '../context/UniversalContext';
import DialogBox from '../components/DialogBox';

function Dashboard() {
  const { getValue } = useContext(UniversalContext);

  const playSound = () => {
    const audio = new Audio('/audio/panels.wav');
    audio.play();
  };

  useEffect(() => {
    playSound();
  }, []);

  return (
    <Container fluid className="position-relative">
      <GlobalStyle backgroundcolor={getValue('background')} primarycolor={getValue('primary')} />
      <Settings/>
      <DialogBox/>
      <StyledRow2 className="justify-content-space-between">
        <StyledCol2 xs={12} md={4} lg={4}>
          <StyledSubCol xs={12}>
            <StyledComponent animationduration={500} animationdelay={6000} onAnimationEnd={playSound}>
              <Watch />
            </StyledComponent>
            <StyledComponent animationduration={500} animationdelay={5500} onAnimationEnd={playSound}>
              <SystemType />
            </StyledComponent>
            <StyledComponent animationduration={500} animationdelay={5000} onAnimationEnd={playSound}>
              <ChartComponent topic='CPU USAGE' subTopic=''/>
            </StyledComponent>
            <StyledComponent animationduration={500} animationdelay={4500} onAnimationEnd={playSound}>
              <CpuStatus/>
            </StyledComponent>
            <StyledComponent animationduration={500} animationdelay={4000} onAnimationEnd={playSound}>
              <MemoryStatus/>
            </StyledComponent>
            <StyledComponent animationduration={500} animationdelay={3500} onAnimationEnd={playSound}>
              <ClipboardAccess/>
            </StyledComponent>
          </StyledSubCol>
        </StyledCol2>
        <StyledCol2 xs={12} md={4} lg={4}>
          <StyledSubCol xs={12}>
            <StyledComponent animationduration={500} animationdelay={3000} onAnimationEnd={playSound}>
              <Terminal/>
            </StyledComponent>
          </StyledSubCol>
        </StyledCol2>
        <StyledCol2 xs={12} md={4} lg={4}>
          <StyledSubCol xs={12}>
            <StyledComponent animationduration={500} animationdelay={2500} onAnimationEnd={playSound}>
              <NetworkStatus/>
            </StyledComponent>
            <StyledComponent animationduration={500} animationdelay={2000} onAnimationEnd={playSound}>
              <Earth/>
            </StyledComponent>
            <StyledComponent animationduration={500} animationdelay={1500} onAnimationEnd={playSound}>
              <TopProcess/>
            </StyledComponent>
          </StyledSubCol>
        </StyledCol2>
      </StyledRow2>
      <StyledRow1>
        <StyledCol1 xs={12} md={6} lg={6} className="d-flex justify-content-center">
          <StyledComponent animationduration={500} animationdelay={500} onAnimationEnd={playSound}>
            <FolderComponent />
          </StyledComponent>
        </StyledCol1>
        <StyledCol1 xs={12} md={6} lg={6} className="d-flex justify-content-center">
          <StyledComponent animationduration={500} animationdelay={0} onAnimationEnd={playSound}>
            <QwertyKeyboard />
          </StyledComponent>
        </StyledCol1>
      </StyledRow1>
    </Container>
  );
}

//styles
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    background-color: ${(props)=>props.backgroundcolor};

    &::-webkit-scrollbar {
    
    width: 8px; /* width of the scrollbar */
    height: 8px; /* height of the scrollbar */
    background-color: ${(props)=>props.backgroundcolor}; /* background color of the scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    
    background-color: ${(props)=>props.primarycolor}; /* color of the scrollbar thumb */
    border-radius: 1px; /* rounded corners of the scrollbar thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props)=>props.primarycolor}; /* hover color of the scrollbar thumb */
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props)=>props.backgroundcolor}; /* background color of the scrollbar track */
  }
  }
`;

const StyledComponent = styled.div`
  opacity: 0; /* initial opacity is 0 */
  animation: ${fadeIn} ${props => props.animationduration}ms cubic-bezier(0.1, 0.5, 0.6, 1) forwards;
  animation-delay: ${props => props.animationdelay}ms;
  animation-fill-mode: forwards;
`;

const StyledRow1 = styled(Row)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding-bottom: 5px;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

const StyledRow2 = styled(Row)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

const StyledCol1 = styled(Col)`
  display: flex;
  margin: 0.5rem;
  align-items: center;
  height: fit-content;
  align-self: center;

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

const StyledCol2 = styled(Col)`
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

const StyledSubCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
   gap:0.5rem;
  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

export default Dashboard;