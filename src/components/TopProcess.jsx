import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: #c6f7d3;
  font-family: monospace;
  border-top: 1px solid #c6f7d3;
  border-bottom: 1px solid #c6f7d3;
  width: 100%;

`;

const Table = styled.table`
  color: #c6f7d3;
  font-family: monospace;
  border-collapse: collapse;
`;

const Topic = styled.span`
  color: #c6f7d3;
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

const TopProcess = () => {
  return (
    <Container>
      <Topic>TOP PROCESSES</Topic>
      <Table>
        <thead>
          <tr>
            <Th width="80px">PID</Th>
            <Th width="150px">NAME</Th>
            <Th width="50px">CPU</Th>
            <Th width="50px">MEM</Th>
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

export default TopProcess;