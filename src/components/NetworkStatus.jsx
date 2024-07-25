import styled from 'styled-components';
import { UniversalContext } from '../context/UniversalContext';
import { useContext } from 'react';


const NetworkStatus = () => {
  const { getValue } = useContext(UniversalContext);
  return (
    <ColumnContainer
    style={{
      borderColor:getValue('primary'),
     }}
    >
      <Topic
       style={{ color: getValue('primary'),
        borderColor:getValue('primary'),
       }}
      >NETWORK STATUS</Topic>
      <NetworkStatusContainer
       style={{ color: getValue('primary'),
       }}
      >
        <NetworkStatusItem>
          <span>STATE</span> <BoldText>ONLINE</BoldText>
        </NetworkStatusItem>
        <NetworkStatusItem>
          <span>IPv4</span> <BoldText>86.252.116.139</BoldText>
        </NetworkStatusItem>
        <NetworkStatusItem>
          <span>PING</span> <BoldText>14ms</BoldText>
        </NetworkStatusItem>
      </NetworkStatusContainer>
    </ColumnContainer>
  );
};

//styles related

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: enter;
  gap: 0.625rem;
  width: 100%;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  border-top: 1px solid ;
  border-bottom: 1px solid ;
`;

const NetworkStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  font-family: monospace;
  font-size: 0.75rem;
  position: relative;
`;

const NetworkStatusItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 0.625rem;
  padding-left: 0.625rem;
`;

const BoldText = styled.span`
  font-weight: bold;
  font-size: 0.85rem;
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



export default NetworkStatus;