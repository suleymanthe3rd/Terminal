import styled from 'styled-components';
import { primary } from '../utils/colors';

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: enter;
  gap: 0.625rem;
  width: 100%;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  border-top: 1px solid ${primary};
  border-bottom: 1px solid ${primary};
`;

const NetworkStatusContainer = styled.div`
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
  color: ${primary};
  font-weight: bold;
  font-size: 0.85rem;
  width: 100%;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const NetworkStatus = () => {
  return (
    <ColumnContainer>
      <Topic>NETWORK STATUS</Topic>
      <NetworkStatusContainer>
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

export default NetworkStatus;