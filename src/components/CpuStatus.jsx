import styled from 'styled-components';
import {  useContext } from "react";
import { UniversalContext } from '../context/UniversalContext';


const CpuStatus = () => {
  const { getValue } = useContext(UniversalContext);

  return (
    <RowContainer
    style={{ color: getValue('primary') }}
    >
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


//styles
const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 20rem;
  justify-content: center;
  font-family: monospace;
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


export default CpuStatus;