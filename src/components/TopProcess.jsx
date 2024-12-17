import {  useContext } from "react";
import { UniversalContext } from '../context/UniversalContext';
import styled from 'styled-components';

const TopProcess = () => {
  const { getValue } = useContext(UniversalContext);
  return (
    <Container
    style={{ color: getValue('primary'), borderColor:getValue('primary')}}
    >
      <Topic
      style={{ color: getValue('primary') }}
      >TOP PROCESSES</Topic>
      <Table
      style={{ color: getValue('primary') }}
      >
        <thead>
          <tr>
          <Th width="4rem">PID</Th>
<Th width="7.5rem">NAME</Th>
<Th width="2.5rem">CPU</Th>
<Th width="2.5rem">MEM</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>15194</Td>
            <Td>electron</Td>
            <Td>28%</Td>
            <Td>2.9%</Td>
          </tr>
          <tr>
            <Td>12715</Td>
            <Td>Discord</Td>
            <Td>12%</Td>
            <Td>2.8%</Td>
          </tr>
          <tr>
            <Td>14869</Td>
            <Td>electron</Td>
            <Td>10%</Td>
            <Td>1.5%</Td>
          </tr>
          <tr>
            <Td>1586</Td>
            <Td>gnome-shell</Td>
            <Td>3%</Td>
            <Td>3.0%</Td>
          </tr>
          <tr>
            <Td>14934</Td>
            <Td>electron</Td>
            <Td>4%</Td>
            <Td>1.4%</Td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

//styles

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  font-family: monospace;
  border-top: 1px solid;
  border-bottom: 1px solid ;
  width: 20rem;
`;

const Table = styled.table`
  font-family: monospace;
  border-collapse: collapse;
`;

const Topic = styled.span`
  font-weight: bold;
  font-size: 0.85rem;
  width: 100%;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Th = styled.th`
  ${({ width }) => `width: ${width};`}
  text-align: center;
`;

const Td = styled.td`
  text-align: center;
`;


export default TopProcess;