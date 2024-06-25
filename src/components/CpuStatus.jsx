import styled from 'styled-components';
import { primary } from '../utils/colors';

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  width: 25%; /* adjusted width to 25% for four columns */
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  font-family: monospace;
  color: ${primary};
  font-size: 0.75rem;
  position: relative;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
`;

const BoldText = styled.span`
  font-weight: bold;
  font-size: 0.85rem;
`;

const CpuStatus = () => {
  return (
    <RowContainer>
      <ColumnContainer>
        <Item>
          <BoldText>TEMP</BoldText>
          <BoldText>68°C</BoldText>
        </Item>
      </ColumnContainer>
      <ColumnContainer>
        <Item>
          <BoldText>MIN</BoldText>
          <BoldText>2.94GHz</BoldText>
        </Item>
      </ColumnContainer>
      <ColumnContainer>
        <Item>
          <BoldText>MAX</BoldText>
          <BoldText>2.94GHz</BoldText>
        </Item>
      </ColumnContainer>
      <ColumnContainer>
        <Item>
          <BoldText>TASKS</BoldText>
          <BoldText>248</BoldText>
        </Item>
      </ColumnContainer>
    </RowContainer>
  );
};

export default CpuStatus;