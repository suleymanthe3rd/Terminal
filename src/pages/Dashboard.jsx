import styled, { createGlobalStyle } from 'styled-components';
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

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
  }
`;

const StyledRow1 = styled(Row)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding-bottom: 20px;

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
  margin-bottom: 1rem;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

const StyledCol1 = styled(Col)`
  flex: 1;
  margin: 0.5rem;
  display: flex;
  align-items: center;
  height: fit-content;
  align-self: center;

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

const StyledCol2 = styled(Col)`
  margin: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  padding: 20px;

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

const StyledSubCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 576px) {
    flex-basis: 100%;
  }
`;

function Dashboard() {
  return (
    <Container fluid className="position-relative">
      <GlobalStyle />
      <StyledRow2 className="justify-content-space-between">
        <StyledCol2 xs={12} md={4} lg={4}>
          <StyledSubCol xs={12}>
            <Watch />
            <SystemType />
            <ChartComponent topic='CPU USAGE' subTopic=''/>
            <CpuStatus/>
            <MemoryStatus/>
            <ClipboardAccess/>
          </StyledSubCol>
        </StyledCol2>
        <StyledCol2 xs={12} md={4} lg={4}>
          <StyledSubCol xs={12}>
           <Terminal/>
          </StyledSubCol>
        </StyledCol2>
        <StyledCol2 xs={12} md={4} lg={4}>
          <StyledSubCol xs={12}>
            <NetworkStatus/>
            <Earth/>
            <TopProcess/>
            <ChartComponent />
          </StyledSubCol>
        </StyledCol2>
      </StyledRow2>
      <StyledRow1>
        <StyledCol1 xs={12} md={6} lg={6} className="d-flex justify-content-center">
          <FolderComponent />
        </StyledCol1>
        <StyledCol1 xs={12} md={6} lg={6} className="d-flex justify-content-center">
          <QwertyKeyboard />
        </StyledCol1>
      </StyledRow1>
    </Container>
  );
}

export default Dashboard;